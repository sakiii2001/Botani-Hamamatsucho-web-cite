# SOW: Supabaseからのメニュー動的フェッチ実装

## プロジェクト概要
現在ハードコードされているドリンクメニューとシーシャフレーバーメニューを、Supabaseデータベースから動的にフェッチして表示するように変更する。

## 現状分析
- **問題**: メニュー情報がハードコードされており、間違った情報が表示されている
- **環境**: Supabase設定済み（.env.local確認済み）
- **データベース**: categories・productsテーブル既存

## 作業範囲

### Phase 1: データベース確認・整備
1. **既存データ確認**
   - Supabaseの categories テーブル内容確認
   - products テーブル内容確認  
   - 正しいメニュー情報の検証

2. **データ修正・追加**
   - 不正確なメニュー情報の修正
   - 不足しているメニューアイテムの追加
   - 多言語対応のためのデータ構造検討

### Phase 2: フロントエンド実装
1. **API クライアント作成**
   - `/lib/supabase-client.js` 作成
   - メニューフェッチ用のAPI関数実装

2. **カスタムフック作成**
   - `useMenuData.js` フック作成
   - ドリンクメニュー取得
   - フレーバーメニュー取得
   - ローディング・エラー状態管理

3. **コンポーネント修正**
   - `app/page.js` のハードコードメニュー削除
   - 動的データ表示への変更
   - `components/menu-modal.tsx` の修正

### Phase 3: エラーハンドリング・最適化
1. **エラーハンドリング**
   - データフェッチ失敗時の表示
   - フォールバック処理

2. **パフォーマンス最適化**
   - データキャッシング
   - ローディング状態の改善

3. **多言語対応**
   - 言語切り替え時の動的データ更新

## 技術仕様

### データベース構造
```sql
-- categories テーブル
id, name, type ('drink', 'flavor')

-- products テーブル  
id, name, price, category_id, type, description
```

### 実装するAPI関数
```javascript
// lib/supabase-client.js
- fetchDrinkCategories()
- fetchFlavorCategories() 
- fetchProductsByCategory(categoryId)
```

### フック仕様
```javascript
// hooks/useMenuData.js
- useDrinkMenu() → {drinks, loading, error}
- useFlavorMenu() → {flavors, loading, error}
```

## 成果物
1. Supabaseからメニューを動的フェッチするシステム
2. 正確なメニュー情報の表示
3. 多言語対応
4. エラーハンドリング機能

## 想定工数
- Phase 1: 2-3時間
- Phase 2: 4-5時間  
- Phase 3: 2-3時間
- **合計**: 8-11時間

## 検証項目
- [ ] メニュー情報が正確に表示される
- [ ] ローディング状態が適切に表示される
- [ ] エラー時のフォールバック動作
- [ ] 多言語切り替え動作
- [ ] モバイル・デスクトップでの表示確認

## 実装詳細

### 現在のハードコード箇所
1. `app/page.js` Line 169-180: ドリンクメニューの価格表示
2. `app/page.js` Line 194-240: シーシャシステム・オプション
3. `components/menu-modal.tsx`: モーダル内のメニュー表示

### 必要な修正ファイル
- `/lib/supabase-client.js` (新規作成)
- `/hooks/useMenuData.js` (新規作成)
- `app/page.js` (修正)
- `components/menu-modal.tsx` (修正)
- `lib/constants.js` (電話番号定数追加済み)

### データベース接続情報
- Supabase URL: 既に.env.localに設定済み
- API Key: 既に.env.localに設定済み
- RLS: 読み取り専用ポリシー設定済み