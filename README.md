# 我的作品集

純 HTML / CSS / JavaScript，不需要安裝或編譯，直接放上 GitHub Pages 就能用。

## 檔案結構

```
index.html            頁面骨架（通常不用改）
assets/js/data.js     ← 你的所有內容都在這裡改
assets/js/main.js     把資料畫到頁面上
assets/css/style.css  樣式與顏色
assets/img/           放作品截圖（自己建立）
```

## 修改內容

打開 `assets/js/data.js`：

- `PROFILE`：名字、GitHub 帳號、自我介紹、技能、聯絡方式
- `CATEGORIES`：作品分類（沒有作品的分類會自動隱藏）
- `PROJECTS`：每個作品一筆，可設定截圖、標籤、連結
- `STORY`：時間軸
- `IN_PROGRESS`：還沒公開的作品

截圖建議用 16:9（例如 1280×720），放到 `assets/img/`，再把 `image` 填成 `"assets/img/檔名.jpg"`。

## 發佈到 GitHub Pages

1. 在 GitHub 建立一個 repo，名稱取 **`你的帳號.github.io`**（例如 `wantingpan.github.io`）。
2. 把這個資料夾裡的所有檔案上傳到 repo 根目錄（網頁上按 **Add file → Upload files**，拖進去即可）。
3. 到 repo 的 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main` / `(root)`，按 Save。
4. 等一兩分鐘，打開 `https://你的帳號.github.io` 就看得到了。

之後改了 `data.js` 再上傳一次，網站就會自動更新。

## 本機預覽

直接雙擊 `index.html` 用瀏覽器開啟即可。
