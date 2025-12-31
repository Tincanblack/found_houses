# 心儀房屋 (found_houses) — 房產資訊 SPA 平台

[![Vue Version](https://img.shields.io/badge/Vue-3.x-4fc08d?style=flat-square&logo=vuedotjs)](https://vuejs.org/)
[![Vite Version](https://img.shields.io/badge/Vite-Latest-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)

**專案簡介：** 一款整合「前台展示」與「後台內容管理 (CMS)」的房產資訊系統。透過 Vue 3 的 Composition API 實現高複用性邏輯，並深度整合 Google Maps 與 Google Sheets，打造流暢的自動化業務流程。

**🔗 [Demo 連結](https://tincanblack.github.io/found_houses/#/)**

---

## 🛠 技術亮點 (Technical Highlights)

### 1. 異質系統整合與資料流自動化
* **Google Maps API：** 實作動態案件座標標記與互動式地圖呈現，提升房產尋找的視覺體驗。
* **Google Sheets 整合：** 透過 `axios` 串接 API，將諮詢表單資料即時寫入 Google Sheets，實現無後端伺服器（Serverless）的資料自動化採集。
* **非同步處理：** 優化非同步資料加載邏輯，解決跨網域數據標準化挑戰。

### 2. 進階架構與狀態管理
* **Vue Router 導航守衛：** 實作嚴密的管理者驗證（Auth）機制與巢狀路由設計，保障後台資料安全性。
* **Mitt 跨元件通訊：** 利用 Event Bus 模式解決複雜元件間的資料傳遞，降低系統耦合度。
* **Composition API 封裝：** 抽離重複業務邏輯（如：篩選器、彈窗、表單驗證），大幅提升開發效率。

### 3. 使用者體驗與視覺化
* **Google Charts：** 實作後台數據統計看板，將房產諮詢狀況視覺化。
* **響應式設計 (RWD)：** 整合 Bootstrap 5 與 Swiper 打造多端相容的流暢體驗。
* **嚴謹表單驗證：** 應用 Vee-validate 實作攔截機制，確保進入後台的資料準確性。

---

## 🚀 主要功能 (Key Features)

### 👤 前台功能
- **智慧搜索：** 支援案件分類展示與多條件篩選。
- **互動工具：** 案件收藏與加入比較清單功能。
- **諮詢系統：** 線上發送諮詢表單並串接地圖位置顯示。

### ⚙️ 後台管理 (CMS)
- **登入驗證：** 完整的管理者驗證與狀態維持。
- **CRUD 管理：** 案件、文章、諮詢表單之完整管理功能。
- **統計分析：** 提供資料排序、分頁處理與數據報表呈現。

---

## 🧱 技術棧 (Tech Stack)

| 類別 | 使用技術 / 工具 |
| :--- | :--- |
| **核心框架** | Vue 3, Vite, Vue Router |
| **套件工具** | Axios, Mitt, Moment.js, Vee-validate |
| **UI / 視覺化** | Bootstrap 5, Swiper, CKEditor 5, Google Charts |
| **外部 API** | Google Maps API, Hexschool Vue API |
| **品質規範** | ESLint (Standard), Prettier, EditorConfig |

---

## 💻 執行專案

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 編譯及壓縮 (Production)
npm run build
