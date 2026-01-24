## 專案資訊

- **專案名稱**：[found_houses]
- **Vue 版本**：Vue 3.2+（支援 props 解構）
- **建置工具**：Vite
- **樣式方案**：Bootstrap4
- **Context 來源**：
  - 優先讀取 `package.json` 確認依賴版本

## 技術選型（專案層）

```
HTTP Client: axios
State Management: pinia
CSS Framework: Bootstrap4
Component Style: Composition API + <script setup>
```

---

## 行為基準

在編寫程式碼時，必須遵守以下原則：
- 如果沒有編寫`<spec>` 先幫我生成
- 僅修改使用者指定的區域（script / template / style）
- 若修改涉及多區塊，需先描述修改原因
- 不得重構未被要求的功能
- 不得 rename props / emits / CSS token，除非 spec 已更新
- 不得修改 `<spec>` 內容，除非使用者明確指示「更新 Spec」
- 若 spec 不足以描述行為，需要求補充資訊，而非猜測
- 若 Spec 使用了未定義的 Design Token，應主動詢問或使用專案現有的近似色

---

## 程式碼規範

### ALWAYS（必須）

- 使用 `<script setup>`
- 使用 Composition API（`ref`, `computed`, `watch`）
- 修改元件前**先讀取 `<spec>` 區塊**

### NEVER（禁止）

- 使用 Options API（`data()`, `methods`, `computed:{}`）
- 使用 `this` 關鍵字
- 刪除或忽略 `<spec>` 區塊
- 在 `<spec>` 中寫入程式庫名稱（如 axios、lodash）
  → 理由：Spec 描述「意圖」，技術選型屬於專案層，不應綁死實作

### Composables 規範

- Composables 不需要 `<spec>` 區塊
- 應有 JSDoc 說明用途與回傳值
- 命名以 `use` 開頭（如 `useUser`、`useFetch`）

## 反向同步 Prompt

當程式碼大幅修改後，輸入 `Sync Spec`、`更新 Spec` 或 `同步規格` 讓 AI 更新 spec。
AI 應執行以下邏輯：

```
請閱讀這個元件的 <script> 與 <template>，更新 <spec> 區塊。

## 保留
- 業務邏輯（What）：這個元件做什麼
- 使用者互動：點擊、hover 等行為
- 視覺規範：Design Token（如 amber-400、gray-300）

## 移除
- 程式庫選擇：axios、lodash 等
- 佈局細節：flex、grid、justify-center
- 錯誤處理機制：try-catch 的具體實作

## 注意
- 不要加入程式碼中不存在的功能或互動
- 不要猜測或腦補需求
- 若不確定某功能是否為意圖，必須詢問使用者，而非寫進 Spec
```

---

## Vue 特有注意事項

### Vue 版本相容性

- **Vue 3.5+**：可直接解構 props，保持響應性
- **Vue 3.4 以下**：禁止直接解構 props，使用 `toRef()` 或 `toRefs()`

> 若不確定版本，請查閱專案的 `package.json` 中的 `vue` 版本

### 常見陷阱提醒

1. **Reactivity Loss**：不要在 setup 外解構 reactive 物件
2. **v-html XSS**：永遠不要將使用者輸入放入 v-html
3. **ref vs reactive**：優先使用 `ref()`，除非有明確理由用 `reactive()`