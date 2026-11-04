# 塔羅日記 · Daily Tarot

每天抽一張塔羅牌、晚上寫日記的小工具（可加入手機主畫面）。

## 檔案說明
- `index.html`：整個 App（牌意也寫在裡面）
- `manifest.json`、`sw.js`、`icons/`：加入主畫面用的設定與圖示
- `cards/<牌組>/back.webp`：各牌組專屬牌背
- `cards/forest/`：森林小動物牌組（`thumb/` 是小圖）
- `cards/rws/`：傳統偉特塔羅（Pamela Colman Smith, 1909，公有領域）
- `cards/dudu/`：嘟嘟一家（準備中）

## 新增牌組
把 78 張圖用跟 `cards/forest/` 一樣的檔名放進新資料夾，再到 `index.html` 的 `DECKS` 把 `ready` 改成 `true`。

資料存在手機瀏覽器裡，記得在「設定」定期匯出備份。
