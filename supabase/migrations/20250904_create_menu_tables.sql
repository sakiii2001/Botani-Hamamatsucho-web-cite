-- カテゴリーテーブル
CREATE TABLE categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('drink', 'flavor', 'shisha')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 商品テーブル
CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price INTEGER, -- 円単位で保存（NULL可能、フレーバーには価格がない）
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    type VARCHAR(20) NOT NULL CHECK (type IN ('drink', 'flavor', 'shisha')),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックス作成
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_type ON products(type);
CREATE INDEX idx_categories_type ON categories(type);

-- RLS (Row Level Security) 有効化
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- 読み取り専用ポリシー（認証不要）
CREATE POLICY "Allow public read access on categories" ON categories
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access on products" ON products
    FOR SELECT USING (true);

-- データ挿入：カテゴリー
INSERT INTO categories (name, type) VALUES
-- ドリンクカテゴリー
('ビール', 'drink'),
('ハイボール・サワー', 'drink'),
('カクテル', 'drink'),
('ソフトドリンク', 'drink'),
('シャンパン・ボトル', 'drink'),
-- フレーバーカテゴリー
('フルーツ系', 'flavor'),
('ミント系', 'flavor'),
('スパイス系', 'flavor'),
('その他', 'flavor'),
-- シーシャカテゴリー
('シーシャ', 'shisha');

-- データ挿入：商品
-- ビール
INSERT INTO products (name, price, category_id, type) VALUES
('生ビール', 800, (SELECT id FROM categories WHERE name = 'ビール'), 'drink'),
('瓶ビール', 700, (SELECT id FROM categories WHERE name = 'ビール'), 'drink');

-- ハイボール・サワー
INSERT INTO products (name, price, category_id, type) VALUES
('角ハイボール', 800, (SELECT id FROM categories WHERE name = 'ハイボール・サワー'), 'drink'),
('レモンサワー', 800, (SELECT id FROM categories WHERE name = 'ハイボール・サワー'), 'drink'),
('グレープフルーツサワー', 800, (SELECT id FROM categories WHERE name = 'ハイボール・サワー'), 'drink');

-- カクテル
INSERT INTO products (name, price, category_id, type) VALUES
('モスコミュール', 900, (SELECT id FROM categories WHERE name = 'カクテル'), 'drink'),
('ジントニック', 900, (SELECT id FROM categories WHERE name = 'カクテル'), 'drink'),
('カシスオレンジ', 900, (SELECT id FROM categories WHERE name = 'カクテル'), 'drink');

-- ソフトドリンク
INSERT INTO products (name, price, category_id, type) VALUES
('コーラ', 700, (SELECT id FROM categories WHERE name = 'ソフトドリンク'), 'drink'),
('オレンジジュース', 700, (SELECT id FROM categories WHERE name = 'ソフトドリンク'), 'drink'),
('ウーロン茶', 700, (SELECT id FROM categories WHERE name = 'ソフトドリンク'), 'drink');

-- シャンパン・ボトル
INSERT INTO products (name, price, category_id, type, description) VALUES
('シャンパン・ボトル', 30000, (SELECT id FROM categories WHERE name = 'シャンパン・ボトル'), 'drink', '特別な日にぴったりなプレミアムシャンパンもご用意しております。');

-- シーシャ
INSERT INTO products (name, price, category_id, type, description) VALUES
('シーシャ', 3000, (SELECT id FROM categories WHERE name = 'シーシャ'), 'shisha', 'シーシャ本体'),
('シェア（2人目以降）', 1500, (SELECT id FROM categories WHERE name = 'シーシャ'), 'shisha', '2人目以降の追加料金');

-- フレーバー（フルーツ系）
INSERT INTO products (name, price, category_id, type) VALUES
('ダブルアップル', NULL, (SELECT id FROM categories WHERE name = 'フルーツ系'), 'flavor'),
('グレープ', NULL, (SELECT id FROM categories WHERE name = 'フルーツ系'), 'flavor'),
('オレンジ', NULL, (SELECT id FROM categories WHERE name = 'フルーツ系'), 'flavor'),
('レモン', NULL, (SELECT id FROM categories WHERE name = 'フルーツ系'), 'flavor'),
('ピーチ', NULL, (SELECT id FROM categories WHERE name = 'フルーツ系'), 'flavor'),
('ストロベリー', NULL, (SELECT id FROM categories WHERE name = 'フルーツ系'), 'flavor');

-- フレーバー（ミント系）
INSERT INTO products (name, price, category_id, type) VALUES
('ミント', NULL, (SELECT id FROM categories WHERE name = 'ミント系'), 'flavor'),
('アイス', NULL, (SELECT id FROM categories WHERE name = 'ミント系'), 'flavor');

-- フレーバー（スパイス系）
INSERT INTO products (name, price, category_id, type) VALUES
('バニラ', NULL, (SELECT id FROM categories WHERE name = 'スパイス系'), 'flavor'),
('シナモン', NULL, (SELECT id FROM categories WHERE name = 'スパイス系'), 'flavor'),
('カルダモン', NULL, (SELECT id FROM categories WHERE name = 'スパイス系'), 'flavor');

-- フレーバー（その他）
INSERT INTO products (name, price, category_id, type) VALUES
('ローズ', NULL, (SELECT id FROM categories WHERE name = 'その他'), 'flavor'),
('ジャスミン', NULL, (SELECT id FROM categories WHERE name = 'その他'), 'flavor'),
('コーヒー', NULL, (SELECT id FROM categories WHERE name = 'その他'), 'flavor'),
('チョコ', NULL, (SELECT id FROM categories WHERE name = 'その他'), 'flavor');