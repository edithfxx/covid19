# COVID-19 疫苗資訊網

一個以 Vue 2 打造的單頁應用（SPA），彙整台灣 COVID-19 疫苗的衛教資訊與接種統計圖表。資料來源為衛生福利部疾病管制署（CDC）與 NCHC COVID-19 全球疫情地圖，時間點為 **2021 年 11～12 月**。

| | |
| --- | --- |
| **開發日期** | 2021 年 12 月 8 日 |
| **版本** | 0.1.0 |
| **狀態** | 已封存，不再維護 |

## 線上 Demo

**▶️ https://edithfxx.github.io/covid19/**

---

## 功能

| 頁面 | 路由 | 說明 |
| --- | --- | --- |
| 疫苗簡介 | `#/` | 以摺疊面板（`el-collapse`）呈現 AZ、BNT、Moderna、高端四款疫苗的疫苗概述、冷儲條件、接種劑量及間隔、接種注意事項 |
| 統計資料 | `#/Statistics` | 以 ECharts 呈現三組疫苗接種圖表，分頁切換 |
| Q&A | `#/QA` | 九大類常見問答的 CDC 官方連結清單 |
| 預約平台 | — | 導覽列點擊後另開新視窗前往 CDC 疫苗接種預約平台 |

### 統計資料頁的三個分頁

1. **疫苗接種人次統計** — 第 1 劑／第 2 劑各廠牌接種人次圓餅圖（累計至 12/5）
2. **各縣市疫苗涵蓋率** — 22 縣市第 1、2 劑涵蓋率對比長條圖（2021-11-29）
3. **各年齡疫苗涵蓋率** — 六個年齡層第 1、2 劑涵蓋率對比長條圖（2021-11-29）

> 所有數據皆為**寫死在元件內的靜態快照**，專案沒有串接後端 API。

---

## 技術棧

| 類別 | 套件 | 版本 |
| --- | --- | --- |
| 框架 | Vue | 2.6.11 |
| 路由 | Vue Router | 3.5.3（hash 模式） |
| UI 元件庫 | Element UI | 2.15.6 |
| 圖表 | ECharts | 5.2.2 |
| 建置工具 | @vue/cli-service | 4.5.x（底層 webpack 4） |

---

## 環境需求

> **開發（`npm run serve`）需使用 Node.js 16 或以下版本。**
> 建置與部署（`npm run build` / `npm run deploy`）不受此限 —— 見下方說明。

`@vue/cli-service` 4.5 底層為 webpack 4，依賴 Node 17+ 之後被 OpenSSL 3 移除的舊雜湊演算法。在 Node 17 以上執行會直接失敗：

```
Error: error:0308010C:digital envelope routines::unsupported
```

若使用 nvm：

```bash
nvm install 16
nvm use 16
node -v   # 應為 v16.x
```

`nvm use` 僅對當前終端機分頁有效，每開一個新視窗都需重新執行。

<details>
<summary>不方便切換 Node 版本時的替代方案</summary>

在啟動指令前加上 OpenSSL legacy provider 旗標：

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run serve
```

這是繞過而非修復，webpack 4 在新版 Node 下仍可能有其他非預期行為，開發時建議優先切換至 Node 16。

> `npm run deploy` 已內建此旗標，部署時不需額外處理。

</details>

---

## 安裝與啟動

```bash
# 1. 切換至 Node 16
nvm use 16

# 2. 安裝依賴（依 package-lock.json 精確還原）
npm ci

# 3. 啟動開發伺服器
npm run serve
```

啟動成功後終端機會顯示 `App running at: http://localhost:8080/`，於瀏覽器開啟即可，支援熱重載（HMR）。

> 安裝過程出現大量 `npm WARN deprecated` 與 `npm audit` 弱點回報屬正常現象——這是 2021 年的依賴樹。**請勿執行 `npm audit fix --force`**，該指令會將 `@vue/cli-service` 升級至不相容的主版本，導致專案無法建置。

### 其他指令

```bash
npm run build   # 建置正式版，輸出至 dist/
npm run lint    # ESLint 檢查並自動修正
npm run deploy  # 建置後發布至 gh-pages 分支（GitHub Pages）
```

---

## 專案結構

```
covid19/
├── public/
│   ├── favicon.ico
│   └── index.html              # HTML 模板，掛載點 #app
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── site.css              # 全域樣式（字體、容器寬度 1200px）
│   │   │   └── element-ui-style.css  # Element UI 樣式覆寫
│   │   └── logo.png
│   ├── components/
│   │   ├── Header.vue          # 頂部導覽列（el-menu），以 $router.push 切換頁面
│   │   ├── Footer.vue          # 頁尾：技術棧、開發日期、資料時間說明
│   │   ├── Index.vue           # 疫苗簡介（首頁）
│   │   ├── Statistics.vue      # 統計資料 + ECharts 圖表
│   │   ├── QA.vue              # 常見問答連結
│   │   └── Appointment.vue     # 預約平台（僅有標題，見下方說明）
│   ├── router/
│   │   └── index.js            # 路由定義，hash 模式
│   ├── App.vue                 # 根元件：Header + router-view
│   └── main.js                 # 進入點，全域註冊 Element UI
├── babel.config.js
└── package.json                # ESLint 設定內嵌於此
```

---

## 實作重點

### 圖表在分頁切換時才初始化

ECharts 需要容器有實際寬高才能正確計算尺寸，而 `el-tabs` 未啟用的分頁在 DOM 中尺寸為 0。因此 [Statistics.vue](src/components/Statistics.vue) 的做法是：

- 首頁分頁的圖表於 `mounted()` 初始化
- 其餘分頁在 `handleClick` 事件中，以 `setTimeout(..., 500)` 延遲初始化，並搭配 `v-loading` 遮罩
- 切換回已載入的分頁時會重新 `init`

### 衛教內容以 `v-html` 渲染

[Index.vue](src/components/Index.vue) 的疫苗說明含有 `<ol>`、`<strong>` 等排版標籤，內容於 `loadDataXXX()` 方法中組成字串陣列後，透過 `v-html` 輸出。內容為專案內建的靜態字串，非使用者輸入。

### 導覽列與路由

[Header.vue](src/components/Header.vue) 的 `handleSelect` 以 `index` 對應路由；`setActiveIndex` 在 `mounted` 時解析 `$route.path`，讓直接輸入網址進入時也能正確標示當前項目。

---

## 已知限制

- **預約平台頁面為空殼**：[router/index.js](src/router/index.js) 註冊了 `/Appointment` 路由，但導覽列第 4 項實際是 `window.open` 開啟 CDC 外部網站，[Appointment.vue](src/components/Appointment.vue) 因此僅有標題、無實質內容。直接輸入 `#/Appointment` 會看到空白頁。
- **資料為靜態快照**：所有統計數字停留在 2021-12-05，需人工更新元件內的陣列。
- **圖表版面為固定寬高**：`chart-style` 等 class 使用固定 px，且未監聽 `resize` 事件，視窗縮放或行動裝置上版面會跑位。
- **依賴含已知安全性弱點**：舊版建置工具鏈所致，僅影響開發環境，正式產出的靜態檔不受影響。

---

## 資料來源

- [衛生福利部疾病管制署 — 疫苗簡介](https://www.cdc.gov.tw/Category/MPage/epjWGimoqASwhAN8X-5Nlw)
- [衛生福利部疾病管制署 — COVID-19 疫苗問答集](https://www.cdc.gov.tw/Category/QAPage/0mRrri9JyeXhLq393QUakw)
- [NCHC COVID-19 全球疫情地圖 — 疫苗接種](https://covid-19.nchc.org.tw/dt_002-csse_covid_19_daily_reports_vaccine_city2.php)
- [COVID-19 疫苗接種預約平台](https://www.cdc.gov.tw/Category/MPage/Ys9aAwmyw4FsvUEqSntiYg)
