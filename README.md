# Thinktecture Slidev Template

Slidev-Präsentationsvorlage im Thinktecture Corporate Design.

## Neue Präsentation erstellen

### Option 1: GitHub Template (empfohlen)

Dieses Repository als [GitHub Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) markieren, dann:

1. Auf GitHub "Use this template" klicken
2. Neues Repo benennen (z.B. `talk-angular-signals`)
3. Klonen und loslegen:

```bash
git clone git@github.com:thinktecture-labs/talk-angular-signals.git
cd talk-angular-signals
npm install
npm run dev
```

### Option 2: Manuell klonen

```bash
git clone git@github.com:thinktecture-labs/slidev-tt-template.git mein-talk
cd mein-talk
rm -rf .git
git init
npm install
npm run dev
```

### Option 3: degit (ohne Git-History)

```bash
npx degit thinktecture-labs/slidev-tt-template mein-talk
cd mein-talk
npm install
npm run dev
```

Dann `slides.md` bearbeiten und Präsentation bauen.

## Kommandos

```bash
npm run dev            # Dev-Server starten (http://localhost:3030)
npm run build          # Als SPA exportieren
npm run export:pdf     # Als PDF exportieren (Light Mode)
npm run export:pdf:dark  # Als PDF exportieren (Dark Mode)
npm run export:pptx    # Als PPTX exportieren (Light Mode)
npm run export:pptx:dark # Als PPTX exportieren (Dark Mode)
npm run lint           # ESLint prüfen
npm run lint:fix       # ESLint auto-fix
npm run format         # Prettier formatieren
```

## Headmatter Konfiguration

Im Frontmatter der ersten Slide werden `title` und `subtitle` definiert. Diese erscheinen in der Header-Bar auf allen Content-Slides:

```md
---
title: Mein Talk-Titel
subtitle: Konferenz 2025
layout: cover
speaker: Vorname Name
handle: twitterhandle
role: Consultant
---

# Headline

::subtitle::

Subheadline
```

## Verfügbare Layouts

| Layout        | Beschreibung                          |
| ------------- | ------------------------------------- |
| `cover`       | Rote Titelfolie mit Speaker-Info      |
| `cover-light` | Helle Titelfolie mit Speaker-Info     |
| `default`     | Standard-Inhaltsfolie mit Header-Bar  |
| `blank`       | Leere Folie mit Header-Bar            |
| `visual`      | Titel oben, visueller Inhalt darunter |
| `two-cols`    | Zwei Spalten                          |
| `section`     | Abschnittstrenner                     |
| `end`         | Abschlussfolie                        |

### Cover (rot)

```md
---
layout: cover
speaker: Vorname Name
handle: vornamename
role: Consultant
---

# Headline

::subtitle::

Subheadline
```

### Cover (hell)

```md
---
layout: cover-light
speaker: Vorname Name
handle: vornamename
role: Consultant
---

# Headline

::subtitle::

Subheadline
```

### Zwei Spalten

```md
---
layout: two-cols
---

# Links

Inhalt links

::right::

# Rechts

Inhalt rechts
```

### Visual

```md
---
layout: visual
---

# Titel

Beschreibung

::visual::

Bild, Mermaid-Diagramm oder andere visuelle Inhalte
```

### End

```md
---
layout: end
website: thinktecture.com
email: info@thinktecture.com
---

# Vielen Dank!

Fragen?
```

## TT Icons

Zwei Icon-Sets unter `public/icons/`:

- **121 neue SVG-Icons** als monochrome Silhouetten, werden via CSS `mask-image` mit Theme-Farben eingefärbt.
- **67 klassische PNG-Icons** in 4 Farbvarianten (`black`, `red`, `gray`, `blue`) unter `public/icons/<color>/`.

Die `TtIcon`-Komponente erkennt automatisch anhand des Namens, welches Format gerendert werden soll (SVG hat bei Namensgleichheit Vorrang, betroffen: `token`).

### TtIcon Komponente (type-safe)

```html
<TtIcon name="ai-agent" color="red" size="64px" /> <TtIcon name="cloud" color="blue" size="64px" />
```

**Props:**

- `name` - Icon-Name mit Autocomplete (alle Namen aus beiden Sets, z.B. `ai-agent`, `llm-language-model`, `cloud`, `server`, `user`)
- `color` - Farbvariante: `black` (default), `red`, `gray`, `blue`
- `size` - Größe (default: `80px`)

### Neue SVG-Icons (Kategorien)

- **AI/LLM:** `ai-agent`, `llm-language-model`, `llm-response-01`, `llm-response-02`, `prompt-template`, `system-prompt`, `chain-of-thought`, `react-loop`, `few-shot-prompting`, `tool-use-function-calling`, `multi-agent-system`, `hallucination`, `context-window`, `transformer`, `neural-network`, `pre-training`, `fine-tuning`, `rlhf`, `evaluation`
- **RAG/Search:** `rag-retrieval-augmented-generation`, `embedding`, `vector`, `vector-database`, `knowledge-base`, `chunking`, `document-chunks`, `semantic-search`, `fuzzy-search`, `exact-search`, `search`, `sources`
- **Daten & Dokumente:** `document`, `pdf-document`, `pdf-with-text-layer`, `pdf-without-text-layer`, `markdown-document`, `json-document`, `xml-document`, `yaml-document`, `csv-document`, `xlsx-document`, `pptx-file`, `dataset`, `extraction-data-extraction`, `ocr`, `structured-output`, `streaming`, `batch-processing`
- **Architektur & Flow:** `api`, `network`, `hub-spoke`, `protocol-layers`, `layers`, `process-flow`, `event-sequence-01`, `event-sequence-02`, `cycle-01`, `cycle-02`, `fork-routing-01`, `fork-routing-02`, `decision-nodes`, `timeline`, `checkpoint`, `caching`, `memory`, `filter`, `grid`, `bounding-box-grid`, `two-panels`
- **Hardware:** `chip-processor-cpu-gpu-npu`, `graphics-card-gpu`, `neural-processing-unit-npu`
- **UI & Code:** `code-01`, `code-02`, `cli-icons`, `chat`, `dashboard`, `form`, `clipboard`, `checklist`, `wrench`, `toolbox`, `warning`, `token`, `microphone`, `audio`, `speaker-01`–`speaker-04`, `image-picture-01`, `image-picture-02`, `video-01`, `voice-text-image-inputs`, `bar-chart-01`
- **Workshops & Hands-on:** `workshop-hands-on`, `websocket-hands-on`, `planning`
- **Defense / Government (Bw):** `bundeswehr-coat-of-arms`, `nato-logo-01`, `nato-logo-02`, `army-land-forces-01`–`army-land-forces-03`, `air-force`, `navy`, `space-forces`, `coalition-multi-national-operations`, `command-control-center`, `radar-air-defense`, `drone-uav`, `robot`, `threat-assessment`, `intelligence-humint`, `map-geographical-intelligence`, `classified-information`, `encryption-military-encription-01`, `encryption-military-encription-02`, `logistics-supply-chain-military-01`, `logistics-supply-chain-military-02`, `cloud-crossed`

### Klassische PNG-Icons (in 4 Farbvarianten)

`admin`, `bitcoin-token`, `block`, `blockchain-1` bis `blockchain-5`, `browser`, `clock`, `cloud`, `crypto-token`, `datenbank`, `desktop`, `download-1` bis `download-3`, `ether-token`, `file`, `firewall-a`, `firewall-b`, `folder`, `funk-kreditkarte`, `funk-smartphone`, `funk-smartwatch`, `funk-tablet`, `gamepad`, `gears`, `globus`, `hyperlink`, `key`, `kreditkarte`, `lupe`, `message`, `message-queue`, `microcontroller`, `notebook`, `offline-1`, `offline-2`, `online-1`, `online-2`, `printer`, `progressive`, `push-notification`, `rechen-zentrum`, `responsive`, `schloss-closed`, `schloss-open`, `schloss-zu-ok`, `server`, `signatur`, `signierte-nachricht`, `smart-contract`, `smartphone`, `smartwatch`, `tablet`, `tasse`, `touch`, `update`, `user`, `user-group`, `usergroup`, `userin`, `verschlsselte-nachricht`, `verschlsselte-und-signierte-nachricht`, `windows-chrome`

## Dark Mode

Das Template unterstützt Dark Mode und orientiert sich am System (`colorSchema: auto`).
Im Dev-Server kann mit dem Slidev-UI zwischen Light/Dark umgeschaltet werden.

Für den Export kann der Modus explizit gewählt werden:

```bash
npm run export:pdf        # Light Mode
npm run export:pdf:dark   # Dark Mode
```

Cover- und End-Slides (rote Slides) sind in beiden Modi identisch.

## Farben

| Variable          | Hex       | Verwendung                             |
| ----------------- | --------- | -------------------------------------- |
| `var(--tt-red)`   | `#FF584F` | Header-Bar, Cover-Hintergrund, Akzente |
| `var(--tt-blue)`  | `#3D6FB4` | Akzentfarbe, Links                     |
| `var(--tt-cream)` | `#F9F8F6` | Content-Hintergrund                    |
| `var(--tt-black)` | `#000000` | Text                                   |
| `var(--tt-gray)`  | `#868686` | Subtitles, dezenter Text               |

## Font

Campton-Schriftfamilie (Light 300, Book 400, Medium 500, SemiBold 600).
