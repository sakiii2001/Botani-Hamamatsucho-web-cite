# URL統一手順：botani-hamamatsucho-web-cite.vercel.app のみ残す

## 🎯 目標
複数あるVercelのデプロイURLを **1つだけ** に統一する
残すURL：`https://botani-hamamatsucho-web-cite.vercel.app`

---

## 📋 ステップバイステップ手順

### ステップ1：Vercelダッシュボードにログイン
1. ブラウザで https://vercel.com にアクセス
2. **Log in** をクリック
3. GitHubアカウントでログイン

### ステップ2：プロジェクトを探す
1. ダッシュボードで **プロジェクト一覧** を確認
2. **`botani-hamamatsucho-website`** または **`Botani-Hamamatsucho-web-cite`** を探す
3. 該当プロジェクトを **クリック**

### ステップ3：現在のURLを確認
1. プロジェクト画面で **上部のURL欄** を確認
2. 複数のURLが表示されている場合があります：
   - `botani-hamamatsucho-web-cite.vercel.app` ← **これを残す**
   - `botani-hamamatsucho-website-abc123.vercel.app` ← 削除対象
   - その他のプレビューURL ← 削除対象

### ステップ4：不要なドメインを削除
1. **Settings** タブをクリック（プロジェクト画面の上部）
2. 左サイドバーで **Domains** をクリック
3. ドメイン一覧が表示される：

```
✅ botani-hamamatsucho-web-cite.vercel.app (Production) ← これは残す
❌ botani-hamamatsucho-website-xyz.vercel.app           ← これを削除
❌ その他のURL                                          ← これらも削除
```

4. **削除したいURL** の右側にある **⋯** (3点メニュー) をクリック
5. **Remove** を選択
6. 確認ダイアログで **Delete** をクリック
7. **残したいURL以外** をすべて削除

### ステップ5：プロダクションブランチを設定
1. **Settings** → **Git** をクリック
2. **Production Branch** を確認
3. **`main`** になっていることを確認
4. 他のブランチが設定されていたら **`main`** に変更

### ステップ6：プレビューデプロイを無効化
1. 同じ **Git** 設定画面で下にスクロール
2. **Deploy Hooks** セクションを確認
3. **Preview Deployments** を **Disabled** に設定
4. **Save** をクリック

### ステップ7：古いデプロイメントを削除
1. **Deployments** タブをクリック
2. 古い/不要なデプロイメント一覧が表示される
3. **最新の本番デプロイ以外** の右側 **⋯** をクリック
4. **Delete** を選択して削除
5. 複数ある場合は繰り返し削除

---

## ✅ 完了確認

### 確認すべきポイント：
- [ ] URLが **1つだけ** 残っている
- [ ] そのURLが `botani-hamamatsucho-web-cite.vercel.app` である
- [ ] プロダクションブランチが `main` になっている
- [ ] 古いデプロイメントが削除されている

### テスト：
1. `https://botani-hamamatsucho-web-cite.vercel.app` にアクセス
2. サイトが正常に表示されることを確認
3. 他のURLでアクセスできないことを確認

---

## 🚨 注意事項

### 削除前の確認：
- **必ず** `botani-hamamatsucho-web-cite.vercel.app` が正常動作することを確認
- このURLが最新のコード（今プッシュした内容）を反映していることを確認

### 削除後：
- 削除したURLはもうアクセスできなくなります
- SEOに影響がある場合は、Google Search Consoleでの設定変更も検討

---

## 💡 トラブルシューティング

### Q：指定のURLが見つからない
**A：** プロジェクト名で検索してみてください。または、GitHubリポジトリから直接Vercelにアクセス

### Q：削除ボタンが見つからない
**A：** Settings → Domains で、各URLの右端にある「⋯」メニューを探してください

### Q：削除後にサイトが表示されない
**A：** 
1. 正しいURLを削除していないか確認
2. 最新のデプロイメントが成功しているか確認
3. `main` ブランチに最新コードがプッシュされているか確認

---

**最終目標：** `https://botani-hamamatsucho-web-cite.vercel.app` 1つのみが残り、他は全て削除された状態