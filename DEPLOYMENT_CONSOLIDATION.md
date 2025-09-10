# Vercel URL統一手順

## 現在の状況
- プロジェクト: `botani-hamamatsucho-website`
- プロジェクトID: `prj_EDtqStil0w8l200vHxKSiRG5b1Hs`
- 複数のデプロイURLが存在している状況

## URL統一手順

### 1. Vercelダッシュボードにアクセス
https://vercel.com/dashboard にログイン

### 2. プロジェクトを選択
`botani-hamamatsucho-website` プロジェクトをクリック

### 3. Settings → Domainsで統一
1. **Settings** タブをクリック
2. 左サイドバーから **Domains** を選択
3. 現在のドメイン一覧を確認

### 4. メインドメインを1つに決定
以下のいずれか1つを選択してください：
- `botani-hamamatsucho-website.vercel.app` (デフォルト)
- またはカスタムドメインがあれば、それを使用

### 5. 不要なドメインを削除
1. 保持するメインドメイン以外の **Remove** ボタンをクリック
2. 確認ダイアログで **Delete** を選択

### 6. プレビューデプロイメントの制限
1. **Settings** → **Git** に移動
2. **Production Branch** を `main` のみに設定
3. **Preview Deployments** で不要なブランチからのデプロイを無効化

### 7. 古いデプロイメントの削除
1. **Deployments** タブに移動
2. 古い/不要なデプロイメントの **...** メニューから **Delete** を選択

## 推奨される最終構成

### 公開URL（1つのみ）
- `https://botani-hamamatsucho-website.vercel.app`

### デプロイ設定
- Production Branch: `main` のみ
- Preview Deployments: 無効化
- 自動デプロイ: `main` ブランチのみ

## 確認方法
統一後は以下を確認：
1. 1つのURLのみがアクティブ
2. `main` ブランチへのプッシュ時のみ自動デプロイ
3. 古いURLにアクセスしても正しいURLにリダイレクト

## 注意事項
- カスタムドメインを使用している場合は、そちらを優先
- SEO上の理由で既存のURLを変更する場合は、リダイレクト設定を忘れずに
- DNS設定が必要な場合は、ドメインプロバイダーでの設定も確認