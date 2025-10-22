<div align="center">
    <img src="./media/logo_small.webp" alt="Spec Kit Logo"/>
    <h1>🌱 Spec Kit</h1>
    <h3><em>更快速地構建高品質軟體。</em></h3>
</div>

<p align="center">
    <strong>一個開源工具包，讓您專注於產品場景和可預測的結果，而不是從頭開始盲目編碼每個部分。</strong>
</p>

<p align="center">
    <a href="https://github.com/github/spec-kit/actions/workflows/release.yml"><img src="https://github.com/github/spec-kit/actions/workflows/release.yml/badge.svg" alt="Release"/></a>
    <a href="https://github.com/github/spec-kit/stargazers"><img src="https://img.shields.io/github/stars/github/spec-kit?style=social" alt="GitHub stars"/></a>
    <a href="https://github.com/github/spec-kit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/github/spec-kit" alt="License"/></a>
    <a href="https://github.github.io/spec-kit/"><img src="https://img.shields.io/badge/docs-GitHub_Pages-blue" alt="Documentation"/></a>
</p>

---

## 目錄

- [🤔 什麼是規格驅動開發？](#-什麼是規格驅動開發)
- [⚡ 快速開始](#-快速開始)
- [📽️ 影片概述](#️-影片概述)
- [🤖 支援的 AI 代理](#-支援的-ai-代理)
- [🔧 Specify CLI 參考](#-specify-cli-參考)
- [📚 核心理念](#-核心理念)
- [🌟 開發階段](#-開發階段)
- [🎯 實驗目標](#-實驗目標)
- [🔧 系統需求](#-系統需求)
- [📖 深入了解](#-深入了解)
- [📋 詳細流程](#-詳細流程)
- [🔍 疑難排解](#-疑難排解)
- [👥 維護者](#-維護者)
- [💬 支援](#-支援)
- [🙏 致謝](#-致謝)
- [📄 授權](#-授權)

## 🤔 什麼是規格驅動開發？

規格驅動開發**顛覆了**傳統軟體開發的模式。數十年來，程式碼一直是王道——規格只是我們建構並在開始「真正的」編碼工作後就丟棄的腳手架。規格驅動開發改變了這一點：**規格變成可執行的**，直接生成可運作的實作，而不僅僅是指導實作。

## ⚡ 快速開始

### 1. 安裝 Specify CLI

選擇您偏好的安裝方式：

#### 選項 1：永久安裝（推薦）

安裝一次，隨處使用：

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

然後直接使用工具：

```bash
specify init <PROJECT_NAME>
specify check
```

升級 specify 請執行：

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git
```

#### 選項 2：一次性使用

不安裝直接執行：

```bash
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
```

**永久安裝的好處：**

- 工具保持安裝並在 PATH 中可用
- 無需建立 shell 別名
- 使用 `uv tool list`、`uv tool upgrade`、`uv tool uninstall` 更好地管理工具
- 更簡潔的 shell 配置

### 2. 建立專案原則

在專案目錄中啟動您的 AI 助手。`/speckit.*` 指令在助手中可用。

使用 **`/speckit.constitution`** 指令建立專案的管理原則和開發指南，這些將指導所有後續的開發工作。

```bash
/speckit.constitution 建立專注於程式碼品質、測試標準、使用者體驗一致性和效能要求的原則
```

### 3. 建立規格

使用 **`/speckit.specify`** 指令描述您想要建構的內容。專注於**什麼**和**為什麼**，而不是技術堆疊。

```bash
/speckit.specify 構建一個應用程式，幫助我將照片組織到不同的相簿中。相簿按日期分組，可以在主頁面透過拖放重新組織。相簿永遠不會嵌套在其他相簿中。在每個相簿內，照片以瓷磚狀介面預覽。
```

### 4. 建立技術實作計劃

使用 **`/speckit.plan`** 指令提供您的技術堆疊和架構選擇。

```bash
/speckit.plan 應用程式使用 Vite，並盡可能減少函式庫的數量。盡可能使用原生的 HTML、CSS 和 JavaScript。圖片不會上傳到任何地方，中繼資料儲存在本地 SQLite 資料庫中。
```

### 5. 分解成任務

使用 **`/speckit.tasks`** 從您的實作計劃建立可執行的任務列表。

```bash
/speckit.tasks
```

### 6. 執行實作

使用 **`/speckit.implement`** 執行所有任務並根據計劃建構您的功能。

```bash
/speckit.implement
```

詳細的逐步說明，請參閱我們的[完整指南](./spec-driven.md)。

## 📽️ 影片概述

想看 Spec Kit 的實際運作？觀看我們的[影片概述](https://www.youtube.com/watch?v=a9eR1xsfvHg&pp=0gcJCckJAYcqIYzv)！

[![Spec Kit video header](/media/spec-kit-video-header.jpg)](https://www.youtube.com/watch?v=a9eR1xsfvHg&pp=0gcJCckJAYcqIYzv)

## 🤖 支援的 AI 代理

| 代理                                                     | 支援 | 備註                                             |
|-----------------------------------------------------------|---------|---------------------------------------------------|
| [Claude Code](https://www.anthropic.com/claude-code)      | ✅ |                                                   |
| [GitHub Copilot](https://code.visualstudio.com/)          | ✅ |                                                   |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | ✅ |                                                   |
| [Cursor](https://cursor.sh/)                              | ✅ |                                                   |
| [Qwen Code](https://github.com/QwenLM/qwen-code)          | ✅ |                                                   |
| [opencode](https://opencode.ai/)                          | ✅ |                                                   |
| [Windsurf](https://windsurf.com/)                         | ✅ |                                                   |
| [Kilo Code](https://github.com/Kilo-Org/kilocode)         | ✅ |                                                   |
| [Auggie CLI](https://docs.augmentcode.com/cli/overview)   | ✅ |                                                   |
| [CodeBuddy CLI](https://www.codebuddy.ai/cli)             | ✅ |                                                   |
| [Roo Code](https://roocode.com/)                          | ✅ |                                                   |
| [Codex CLI](https://github.com/openai/codex)              | ✅ |                                                   |
| [Amazon Q Developer CLI](https://aws.amazon.com/developer/learning/q-developer-cli/) | ⚠️ | Amazon Q Developer CLI [不支援](https://github.com/aws/amazon-q-developer-cli/issues/3064)斜線指令的自訂參數。 |
| [Amp](https://ampcode.com/) | ✅ | |

## 🔧 Specify CLI 參考

`specify` 指令支援以下選項：

### 指令

| 指令     | 說明                                                    |
|-------------|----------------------------------------------------------------|
| `init`      | 從最新範本初始化新的 Specify 專案      |
| `check`     | 檢查已安裝的工具（`git`、`claude`、`gemini`、`code`/`code-insiders`、`cursor-agent`、`windsurf`、`qwen`、`opencode`、`codex`） |

### `specify init` 參數與選項

| 參數/選項        | 類型     | 說明                                                                  |
|------------------------|----------|------------------------------------------------------------------------------|
| `<project-name>`       | 參數 | 新專案目錄的名稱（使用 `--here` 時可選，或使用 `.` 表示目前目錄） |
| `--ai`                 | 選項   | 要使用的 AI 助手：`claude`、`gemini`、`copilot`、`cursor-agent`、`qwen`、`opencode`、`codex`、`windsurf`、`kilocode`、`auggie`、`roo`、`codebuddy`、`amp` 或 `q` |
| `--script`             | 選項   | 要使用的腳本變體：`sh`（bash/zsh）或 `ps`（PowerShell）                 |
| `--ignore-agent-tools` | 標誌     | 跳過 AI 代理工具（如 Claude Code）的檢查                             |
| `--no-git`             | 標誌     | 跳過 git 儲存庫初始化                                          |
| `--here`               | 標誌     | 在目前目錄初始化專案，而不是建立新目錄   |
| `--force`              | 標誌     | 在目前目錄初始化時強制合併/覆寫（跳過確認） |
| `--skip-tls`           | 標誌     | 跳過 SSL/TLS 驗證（不建議）                                 |
| `--debug`              | 標誌     | 啟用詳細除錯輸出以進行疑難排解                            |
| `--github-token`       | 選項   | 用於 API 請求的 GitHub token（或設定 GH_TOKEN/GITHUB_TOKEN 環境變數）  |

### 範例

```bash
# 基本專案初始化
specify init my-project

# 使用特定 AI 助手初始化
specify init my-project --ai claude

# 使用 Cursor 支援初始化
specify init my-project --ai cursor-agent

# 使用 Windsurf 支援初始化
specify init my-project --ai windsurf

# 使用 Amp 支援初始化
specify init my-project --ai amp

# 使用 PowerShell 腳本初始化（Windows/跨平台）
specify init my-project --ai copilot --script ps

# 在目前目錄初始化
specify init . --ai copilot
# 或使用 --here 標誌
specify init --here --ai copilot

# 強制合併到目前（非空）目錄而不確認
specify init . --force --ai copilot
# 或
specify init --here --force --ai copilot

# 跳過 git 初始化
specify init my-project --ai gemini --no-git

# 啟用除錯輸出以進行疑難排解
specify init my-project --ai claude --debug

# 使用 GitHub token 進行 API 請求（對企業環境有幫助）
specify init my-project --ai claude --github-token ghp_your_token_here

# 檢查系統需求
specify check
```

### 可用的斜線指令

執行 `specify init` 後，您的 AI 編程代理將可以使用這些斜線指令進行結構化開發：

#### 核心指令

規格驅動開發工作流程的基本指令：

| 指令                  | 說明                                                           |
|--------------------------|-----------------------------------------------------------------------|
| `/speckit.constitution`  | 建立或更新專案管理原則和開發指南 |
| `/speckit.specify`       | 定義您想要建構的內容（需求和使用者故事）        |
| `/speckit.plan`          | 使用您選擇的技術堆疊建立技術實作計劃     |
| `/speckit.tasks`         | 為實作生成可執行的任務列表                     |
| `/speckit.implement`     | 執行所有任務以根據計劃建構功能         |

#### 可選指令

用於增強品質和驗證的額外指令：

| 指令              | 說明                                                           |
|----------------------|-----------------------------------------------------------------------|
| `/speckit.clarify`   | 澄清規格不足的區域（建議在 `/speckit.plan` 之前使用；原為 `/quizme`） |
| `/speckit.analyze`   | 跨工件一致性和覆蓋率分析（在 `/speckit.tasks` 之後、`/speckit.implement` 之前執行） |
| `/speckit.checklist` | 生成驗證需求完整性、清晰度和一致性的自訂品質檢查清單（如「英文的單元測試」） |

### 環境變數

| 變數         | 說明                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| `SPECIFY_FEATURE` | 為非 Git 儲存庫覆蓋功能檢測。設定為功能目錄名稱（例如 `001-photo-albums`）以在不使用 Git 分支時處理特定功能。<br/>**必須在使用 `/speckit.plan` 或後續指令之前在您正在使用的代理上下文中設定。 |

## 📚 核心理念

規格驅動開發是一個結構化流程，強調：

- **意圖驅動開發**，其中規格在「*如何*」之前定義「*什麼*」
- **豐富的規格建立**，使用防護欄和組織原則
- **多步驟精煉**，而不是從提示一次性生成程式碼
- **重度依賴**先進 AI 模型的規格解釋能力

## 🌟 開發階段

| 階段 | 焦點 | 關鍵活動 |
|-------|-------|----------------|
| **0-to-1 開發**（「綠地」） | 從頭生成 | <ul><li>從高階需求開始</li><li>生成規格</li><li>規劃實作步驟</li><li>建構可用於生產的應用程式</li></ul> |
| **創意探索** | 平行實作 | <ul><li>探索多樣化解決方案</li><li>支援多種技術堆疊與架構</li><li>實驗 UX 模式</li></ul> |
| **迭代增強**（「棕地」） | 棕地現代化 | <ul><li>迭代新增功能</li><li>現代化遺留系統</li><li>調整流程</li></ul> |

## 🎯 實驗目標

我們的研究和實驗專注於：

### 技術獨立性

- 使用多樣化的技術堆疊建立應用程式
- 驗證規格驅動開發是一個不依賴特定技術、程式語言或框架的流程的假設

### 企業約束

- 展示關鍵任務應用程式開發
- 納入組織約束（雲端供應商、技術堆疊、工程實務）
- 支援企業設計系統和合規要求

### 以使用者為中心的開發

- 為不同使用者群體和偏好建立應用程式
- 支援各種開發方法（從感覺編程到 AI 原生開發）

### 創意與迭代流程

- 驗證平行實作探索的概念
- 提供強健的迭代功能開發工作流程
- 擴展流程以處理升級和現代化任務

## 🔧 系統需求

- **Linux/macOS/Windows**
- [支援的](#-支援的-ai-代理) AI 編程代理。
- [uv](https://docs.astral.sh/uv/) 用於套件管理
- [Python 3.11+](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)

如果您在使用代理時遇到問題，請開啟 issue，以便我們可以改善整合。

## 📖 深入了解

- **[完整的規格驅動開發方法論](./spec-driven.md)** - 深入了解完整流程
- **[詳細演練](#-詳細流程)** - 逐步實作指南

---

## 📋 詳細流程

<details>
<summary>點擊展開詳細的逐步演練</summary>

您可以使用 Specify CLI 來啟動您的專案，這將在您的環境中引入所需的工件。執行：

```bash
specify init <project_name>
```

或在目前目錄初始化：

```bash
specify init .
# 或使用 --here 標誌
specify init --here
# 當目錄已有檔案時跳過確認
specify init . --force
# 或
specify init --here --force
```

![Specify CLI bootstrapping a new project in the terminal](./media/specify_cli.gif)

系統會提示您選擇您正在使用的 AI 代理。您也可以在終端機中直接主動指定：

```bash
specify init <project_name> --ai claude
specify init <project_name> --ai gemini
specify init <project_name> --ai copilot

# 或在目前目錄：
specify init . --ai claude
specify init . --ai codex

# 或使用 --here 標誌
specify init --here --ai claude
specify init --here --ai codex

# 強制合併到非空的目前目錄
specify init . --force --ai claude

# 或
specify init --here --force --ai claude
```

CLI 將檢查您是否已安裝 Claude Code、Gemini CLI、Cursor CLI、Qwen CLI、opencode、Codex CLI 或 Amazon Q Developer CLI。如果您沒有安裝，或者您偏好在不檢查正確工具的情況下獲取範本，請在您的指令中使用 `--ignore-agent-tools`：

```bash
specify init <project_name> --ai claude --ignore-agent-tools
```

### **步驟 1：** 建立專案原則

前往專案資料夾並執行您的 AI 代理。在我們的範例中，我們使用 `claude`。

![Bootstrapping Claude Code environment](./media/bootstrap-claude-code.gif)

如果您看到 `/speckit.constitution`、`/speckit.specify`、`/speckit.plan`、`/speckit.tasks` 和 `/speckit.implement` 指令可用，就知道設定正確。

第一步應該是使用 `/speckit.constitution` 指令建立專案的管理原則。這有助於確保在所有後續開發階段中做出一致的決策：

```text
/speckit.constitution 建立專注於程式碼品質、測試標準、使用者體驗一致性和效能要求的原則。包含這些原則應如何指導技術決策和實作選擇的治理。
```

此步驟建立或更新 `.specify/memory/constitution.md` 檔案，其中包含您專案的基礎指南，AI 代理將在規格、規劃和實作階段中參考這些指南。

### **步驟 2：** 建立專案規格

建立專案原則後，您現在可以建立功能規格。使用 `/speckit.specify` 指令，然後提供您想要開發的專案的具體需求。

>[!IMPORTANT]
>盡可能明確說明您嘗試建構的*內容*和*原因*。**在此階段不要專注於技術堆疊**。

範例提示：

```text
開發 Taskify，一個團隊生產力平台。它應該允許使用者建立專案、新增團隊成員、
分配任務、評論並以看板風格在看板之間移動任務。在此初始階段對於這個功能，
讓我們稱之為「建立 Taskify」，讓我們有多個使用者，但使用者會提前宣告，預先定義。
我想要五個使用者分為兩個不同類別，一個產品經理和四個工程師。讓我們建立三個
不同的範例專案。讓我們為每個任務的狀態設定標準看板欄位，例如「待辦」、
「進行中」、「審查中」和「完成」。此應用程式將沒有登入功能，因為這只是第一個
測試功能，確保我們的基本功能已設定。對於任務卡 UI 中的每個任務，
您應該能夠在看板工作板的不同欄位之間更改任務的目前狀態。
您應該能夠為特定卡片留下無限數量的評論。您應該能夠從該任務
卡片分配其中一個有效使用者。當您第一次啟動 Taskify 時，它會給您一個五個使用者的列表供選擇。
不需要密碼。當您點擊使用者時，您進入主視圖，顯示專案列表。當您點擊專案時，您開啟該專案的看板。您將看到欄位。
您將能夠在不同欄位之間拖放卡片。您將看到分配給您（目前登入使用者）的任何卡片以與所有其他卡片不同的顏色顯示，
這樣您就可以快速看到您的卡片。您可以編輯您所做的任何評論，但不能編輯其他人所做的評論。您可以
刪除您所做的任何評論，但不能刪除其他人所做的任何評論。
```

輸入此提示後，您應該看到 Claude Code 啟動規劃和規格草擬流程。Claude Code 也會觸發一些內建腳本來設定儲存庫。

完成此步驟後，您應該建立一個新分支（例如 `001-create-taskify`），以及 `specs/001-create-taskify` 目錄中的新規格。

生成的規格應包含一組使用者故事和功能需求，如範本中所定義。

在此階段，您的專案資料夾內容應類似於以下內容：

```text
└── .specify
    ├── memory
    │  └── constitution.md
    ├── scripts
    │  ├── check-prerequisites.sh
    │  ├── common.sh
    │  ├── create-new-feature.sh
    │  ├── setup-plan.sh
    │  └── update-claude-md.sh
    ├── specs
    │  └── 001-create-taskify
    │      └── spec.md
    └── templates
        ├── plan-template.md
        ├── spec-template.md
        └── tasks-template.md
```

### **步驟 3：** 功能規格澄清（規劃前必須）

建立基線規格後，您可以繼續澄清第一次嘗試中未正確捕獲的任何需求。

您應該在建立技術計劃**之前**執行結構化澄清工作流程，以減少下游的重新工作。

偏好順序：

1. 使用 `/speckit.clarify`（結構化）– 基於序列和覆蓋率的提問，將答案記錄在澄清部分。
2. 如果仍然感覺模糊，可選擇性地使用即興自由形式的精煉進行後續追踪。

如果您有意想要跳過澄清（例如，spike 或探索性原型），請明確說明，這樣代理就不會因為缺少澄清而阻塞。

自由形式精煉提示範例（如果在 `/speckit.clarify` 之後仍需要）：

```text
對於您建立的每個範例專案或專案，每個專案應該有 5 到 15 個任務的變動數量，
隨機分布到不同的完成狀態。確保每個完成階段至少有一個任務。
```

您也應該要求 Claude Code 驗證**審查與接受檢查清單**，勾選經過驗證/符合需求的項目，並將不符合的項目留空。可以使用以下提示：

```text
閱讀審查和接受檢查清單，如果功能規格符合標準，請勾選檢查清單中的每個項目。如果不符合則留空。
```

重要的是利用與 Claude Code 的互動作為澄清和詢問規格相關問題的機會——**不要將其第一次嘗試視為最終版本**。

### **步驟 4：** 生成計劃

您現在可以具體說明技術堆疊和其他技術需求。您可以使用內建於專案範本中的 `/speckit.plan` 指令，提示如下：

```text
我們將使用 .NET Aspire 生成這個，使用 Postgres 作為資料庫。前端應該使用
Blazor 伺服器，具有拖放任務板、即時更新。應該建立一個 REST API，包含專案 API、
任務 API 和通知 API。
```

此步驟的輸出將包括多個實作細節文件，您的目錄樹類似於：

```text
.
├── CLAUDE.md
├── memory
│  └── constitution.md
├── scripts
│  ├── check-prerequisites.sh
│  ├── common.sh
│  ├── create-new-feature.sh
│  ├── setup-plan.sh
│  └── update-claude-md.sh
├── specs
│  └── 001-create-taskify
│      ├── contracts
│      │  ├── api-spec.json
│      │  └── signalr-spec.md
│      ├── data-model.md
│      ├── plan.md
│      ├── quickstart.md
│      ├── research.md
│      └── spec.md
└── templates
    ├── CLAUDE-template.md
    ├── plan-template.md
    ├── spec-template.md
    └── tasks-template.md
```

檢查 `research.md` 文件以確保根據您的指示使用正確的技術堆疊。如果任何元件突出，您可以要求 Claude Code 精煉它，甚至讓它檢查您想要使用的平台/框架的本地安裝版本（例如 .NET）。

此外，如果是快速變化的東西（例如 .NET Aspire、JS 框架），您可能想要要求 Claude Code 研究所選技術堆疊的詳細資訊，提示如下：

```text
我想要您仔細檢查實作計劃和實作詳細資訊，尋找可能受益於額外研究的區域，因為 .NET Aspire 是一個快速變化的函式庫。對於您識別出需要進一步研究的區域，我想要您使用關於我們將在此 Taskify 應用程式中使用的特定版本的額外詳細資訊更新研究文件，並產生平行研究任務以使用來自網路的研究澄清任何詳細資訊。
```

在此過程中，您可能會發現 Claude Code 卡在研究錯誤的事情上——您可以用這樣的提示幫助引導它走向正確的方向：

```text
我認為我們需要將此分解為一系列步驟。首先，識別在實作過程中您需要執行的任務列表，
但您不確定或可能受益於進一步研究。寫下這些任務的列表。然後對於這些任務中的每一個，
我想要您啟動一個單獨的研究任務，這樣網路結果就是我們平行研究所有這些非常具體的任務。我看到您正在做的是
看起來像您正在一般性地研究 .NET Aspire，我認為在這種情況下那對我們沒有太大幫助。
這是太過不針對性的研究。研究需要幫助您解決特定的針對性問題。
```

>[!NOTE]
>Claude Code 可能過於熱切並新增您沒有要求的元件。要求它澄清理由和變更的來源。

### **步驟 5：** 讓 Claude Code 驗證計劃

建立計劃後，您應該讓 Claude Code 檢查以確保沒有遺漏的部分。您可以使用這樣的提示：

```text
現在我想要您去審計實作計劃和實作詳細檔案。
仔細閱讀它，著眼於確定是否有一系列明顯需要執行的任務。因為我不知道這裡是否有足夠的資訊。例如，
當我查看核心實作時，在實作詳細資訊中參考適當的地方會很有用，
在其經過核心實作或精煉中的每個步驟時可以找到資訊。
```

這有助於精煉實作計劃，並幫助您避免 Claude Code 在規劃週期中遺漏的潛在盲點。完成初始精煉通過後，要求 Claude Code 在您進入實作之前再次檢查檢查清單。

您也可以要求 Claude Code（如果您安裝了 [GitHub CLI](https://docs.github.com/en/github-cli/github-cli)）繼續從您目前的分支到 `main` 建立一個包含詳細描述的拉取請求，以確保努力得到適當的追蹤。

>[!NOTE]
>在您讓代理實作它之前，也值得提示 Claude Code 交叉檢查詳細資訊，看看是否有任何過度工程化的部分（記住——它可能過於熱切）。如果存在過度工程化的元件或決策，您可以要求 Claude Code 解決它們。確保 Claude Code 遵循 [constitution](base/memory/constitution.md) 作為在建立計劃時必須遵守的基礎部分。

### **步驟 6：** 使用 /speckit.tasks 生成任務分解

驗證實作計劃後，您現在可以將計劃分解為可以按正確順序執行的具體、可執行任務。使用 `/speckit.tasks` 指令從您的實作計劃自動生成詳細的任務分解：

```text
/speckit.tasks
```

此步驟在您的功能規格目錄中建立一個 `tasks.md` 檔案，其中包含：

- **按使用者故事組織的任務分解** - 每個使用者故事都成為具有自己任務集的獨立實作階段
- **相依性管理** - 任務按順序排列以尊重元件之間的相依性（例如，模型在服務之前，服務在端點之前）
- **平行執行標記** - 可以平行執行的任務標記為 `[P]` 以優化開發工作流程
- **檔案路徑規格** - 每個任務包含應該進行實作的確切檔案路徑
- **測試驅動開發結構** - 如果請求測試，包含測試任務並按順序在實作之前編寫
- **檢查點驗證** - 每個使用者故事階段包含檢查點以驗證獨立功能

生成的 tasks.md 為 `/speckit.implement` 指令提供清楚的路線圖，確保系統性實作，維持程式碼品質並允許使用者故事的增量交付。

### **步驟 7：** 實作

準備好後，使用 `/speckit.implement` 指令執行您的實作計劃：

```text
/speckit.implement
```

`/speckit.implement` 指令將：

- 驗證所有先決條件都已到位（constitution、spec、plan 和 tasks）
- 從 `tasks.md` 解析任務分解
- 按正確順序執行任務，尊重相依性和平行執行標記
- 遵循任務計劃中定義的 TDD 方法
- 提供進度更新並適當處理錯誤

>[!IMPORTANT]
>AI 代理將執行本地 CLI 指令（例如 `dotnet`、`npm` 等）——確保您的機器上安裝了所需的工具。

實作完成後，測試應用程式並解決 CLI 日誌中可能不可見的任何執行時錯誤（例如瀏覽器控制台錯誤）。您可以將這些錯誤複製並貼上回您的 AI 代理以解決。

</details>

---

## 🔍 疑難排解

### Linux 上的 Git 憑證管理員

如果您在 Linux 上遇到 Git 驗證問題，可以安裝 Git 憑證管理員：

```bash
#!/usr/bin/env bash
set -e
echo "正在下載 Git 憑證管理員 v2.6.1..."
wget https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.6.1/gcm-linux_amd64.2.6.1.deb
echo "正在安裝 Git 憑證管理員..."
sudo dpkg -i gcm-linux_amd64.2.6.1.deb
echo "正在配置 Git 使用 GCM..."
git config --global credential.helper manager
echo "正在清理..."
rm gcm-linux_amd64.2.6.1.deb
```

## 👥 維護者

- Den Delimarsky ([@localden](https://github.com/localden))
- John Lam ([@jflam](https://github.com/jflam))

## 💬 支援

如需支援，請開啟 [GitHub issue](https://github.com/github/spec-kit/issues/new)。我們歡迎錯誤報告、功能請求和關於使用規格驅動開發的問題。

## 🙏 致謝

此專案深受 [John Lam](https://github.com/jflam) 的工作和研究影響並基於其基礎。

## 📄 授權

此專案根據 MIT 開源授權條款授權。完整條款請參閱 [LICENSE](./LICENSE) 檔案。
