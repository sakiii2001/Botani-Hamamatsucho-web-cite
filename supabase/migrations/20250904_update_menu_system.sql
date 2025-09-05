-- 既存データをクリア
DELETE FROM products;
DELETE FROM categories;

-- カテゴリーの再挿入
INSERT INTO categories (name, type) VALUES
-- ドリンクカテゴリー
('ビール', 'drink'),
('ハイボール・サワー', 'drink'),
('カクテル', 'drink'),
('ソフトドリンク', 'drink'),
('シャンパン・ボトル', 'drink'),
-- システムカテゴリー
('チャージ', 'shisha'),
('シーシャ', 'shisha'),
('シーシャオプション', 'shisha'),
-- フレーバーカテゴリー
('Fruit', 'flavor'),
('Tea', 'flavor'),
('Sweets', 'flavor'),
('Spice&Others', 'flavor');

-- ドリンク商品の挿入
INSERT INTO products (name, price, category_id, type) VALUES
-- ビール
('生ビール', 800, (SELECT id FROM categories WHERE name = 'ビール'), 'drink'),
('瓶ビール', 700, (SELECT id FROM categories WHERE name = 'ビール'), 'drink'),

-- ハイボール・サワー
('角ハイボール', 800, (SELECT id FROM categories WHERE name = 'ハイボール・サワー'), 'drink'),
('レモンサワー', 800, (SELECT id FROM categories WHERE name = 'ハイボール・サワー'), 'drink'),
('グレープフルーツサワー', 800, (SELECT id FROM categories WHERE name = 'ハイボール・サワー'), 'drink'),

-- カクテル
('モスコミュール', 900, (SELECT id FROM categories WHERE name = 'カクテル'), 'drink'),
('ジントニック', 900, (SELECT id FROM categories WHERE name = 'カクテル'), 'drink'),
('カシスオレンジ', 900, (SELECT id FROM categories WHERE name = 'カクテル'), 'drink'),

-- ソフトドリンク
('コーラ', 700, (SELECT id FROM categories WHERE name = 'ソフトドリンク'), 'drink'),
('オレンジジュース', 700, (SELECT id FROM categories WHERE name = 'ソフトドリンク'), 'drink'),
('ウーロン茶', 700, (SELECT id FROM categories WHERE name = 'ソフトドリンク'), 'drink'),

-- シャンパン・ボトル
('シャンパン・ボトル', 30000, (SELECT id FROM categories WHERE name = 'シャンパン・ボトル'), 'drink', '特別な日にぴったりなプレミアムシャンパンもご用意しております。');

-- システム料金
INSERT INTO products (name, price, category_id, type) VALUES
-- チャージ
('ALL TIME', 1000, (SELECT id FROM categories WHERE name = 'チャージ'), 'shisha'),
('BAR USE', 1500, (SELECT id FROM categories WHERE name = 'チャージ'), 'shisha'),

-- シーシャ
('シーシャ一台', 3000, (SELECT id FROM categories WHERE name = 'シーシャ'), 'shisha'),
('シェア', 1500, (SELECT id FROM categories WHERE name = 'シーシャ'), 'shisha'),

-- シーシャオプション
('アイスホース', 800, (SELECT id FROM categories WHERE name = 'シーシャオプション'), 'shisha'),
('ジュースボトル', 1000, (SELECT id FROM categories WHERE name = 'シーシャオプション'), 'shisha'),
('アルコールボトル', 3000, (SELECT id FROM categories WHERE name = 'シーシャオプション'), 'shisha'),
('トップ替え', 2000, (SELECT id FROM categories WHERE name = 'シーシャオプション'), 'shisha');

-- フレーバー
INSERT INTO products (name, price, category_id, type) VALUES
-- Fruit
('ダブルアップル', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ピーチ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ライム', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('レモン', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('オレンジ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('グレープフルーツ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('マンゴー', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('パイン', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('チェリー', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ラズベリー', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ストロベリー', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ブルーベリー', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ザクロ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('グレープ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('スイカ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('メロン', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('ライチ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('キウイ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('バナナ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('グアバ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),
('パッションフルーツ', NULL, (SELECT id FROM categories WHERE name = 'Fruit'), 'flavor'),

-- Tea
('アールグレイ', NULL, (SELECT id FROM categories WHERE name = 'Tea'), 'flavor'),
('ベルガモットティー', NULL, (SELECT id FROM categories WHERE name = 'Tea'), 'flavor'),
('リンデンティー', NULL, (SELECT id FROM categories WHERE name = 'Tea'), 'flavor'),

-- Sweets
('バニラ', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),
('ミルク', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),
('ハチミツ', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),
('キャラメル', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),
('カプチーノ', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),
('ヨーグルト', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),
('ココナッツ', NULL, (SELECT id FROM categories WHERE name = 'Sweets'), 'flavor'),

-- Spice&Others
('ミント', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('アイス', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('カルダモン', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('シナモン', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('パンラズナ', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('ホワイトムスク', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('ヒノキ', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('スプリングウォーター', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('ローズ', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('ジャスミン', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor'),
('コーラ', NULL, (SELECT id FROM categories WHERE name = 'Spice&Others'), 'flavor');