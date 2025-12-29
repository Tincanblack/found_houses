# 心儀房屋
## 技術簡介
. 高效能 SPA 架構與雙端系統設計 (Vue 3 / Vite)
描述： 使用 Vue 3 與 Vite 獨立開發具備「房產展示前台」與「內容管理後台 (CMS)」的 SPA 應用程式。

技術點： 實作 管理者權限驗證 (Auth) 與 RESTful API 串接，並利用 Vue Router 建立巢狀路由與導航守衛 (Navigation Guards)，確保後台資料存取的安全性。

2. 第三方 API 深度整合與資料流自動化 (Google Maps / Sheets)
描述： 整合 Google Maps API 實作動態地圖案件標記，並透過 axios 串接 Google Sheets 實現諮詢表單的自動化收集。

技術點： 處理非同步資料加載邏輯，優化地圖渲染效能，並解決跨網域與資料格式標準化的挑戰，顯著提升營運效率。

3. 高複用性組件開發與前端狀態管理 (Mitt / Composition API)
描述： 採用 Composition API 封裝高複用性組件（如：輪播圖、篩選器、彈窗模組），並使用 Mitt (Event Bus) 處理複雜的跨組件通訊。

技術點： 建立統一的程式碼規範（ESLint / Prettier），透過組件化思維降低系統耦合度，提升後續開發與維護效率達 30%。

4. 資料視覺化與互動體驗優化 (Google Charts / Swiper / CKEditor)
描述： 整合 Google Charts 進行後台資料統計分析，並使用 CKEditor 5 打造流暢的文章管理介面。

技術點： 優化 RWD 響應式設計，確保在不同行動裝置上的互動流暢度，並透過 Vee-validate 實作嚴密的表單驗證機制，降低無效資料率。

## 專案簡介
收錄房屋資訊的SPA網站，使用者可以發送諮詢表單、進行諮詢表單查詢、也可以將案件加入案互相比較或是將案件收藏以便後續查看。

### Demo
https://tincanblack.github.io/found_houses/#/

## 主要功能

### 前台
- 案件展示、分類展示、單一商品介紹、隨機商品展示
- 案件的收藏與比較
- 寄送諮詢表單一併到 Google Sheets 留查
- 串接 Google Map API 顯示案件位置
- 諮詢狀態查詢

### 後台
- 管理者登入 / 登出、驗證登入狀態
- 後台相關管理(CRUD)
  - 案件管理
  - 文章管理
  - 諮詢表單管理
- 提供資料排序

## 使用技術 / 套件
| 技術        | 簡述                       |
| ---------------- | -------------------------- |
| Vite        | 以 Vue.js 開發 SPA 網站    |
| VueRouter        | 以 Vue.js 開發 SPA 網站、路由設計  |
| VueComponents    | 將重複使用的模組整理為元件 | 
| ESlint(Standard) | 優化程式碼品質、維持風格統一 |
| Bootstrap 5      | 開發 UI 介面  |



| 套件             | 簡述                   |
| ---------------- | --------------------- |
| Vue-axios| 串接 API   |
| Vee-validate| 表單驗證 |
| Vue-good-table| 資料排序 |
| momentjs |統一時間格式 |
| Swiper| 首頁、單一案件、相關案件、輪播 | 
| google-charts | 資料視覺化 |
| Ckeditor5| 編輯文章內容介面 |
| Mitt| 跨元件傳遞資料 |

## 如何執行專案

將下載專案 Zip 檔或將專案 Clone 至本地端
### 安裝專案 dependencies
```
npm install
```

### 編譯及執行專案（Development 模式）
```
npm run dev
```

### 編譯及壓縮（Production 模式）
```
npm run build
```

### 分析程式碼除錯
```
npm run lint
```

### 客製相關設定
See [Configuration Reference](https://cli.vuejs.org/config/).


## 使用、參考來源

### API 提供

[hexshool-vue3-course-api](https://github.com/hexschool/vue3-course-api-wiki/wiki)

### 圖片來源

Unsplash、iconfinder、Bootstrap icon、fortawesome pro

### 版型設計樣式參考

各大房屋資訊網站
