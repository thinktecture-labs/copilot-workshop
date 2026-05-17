---
layout: section
---

# Welcome

Setting the stage

---
layout: two-cols
---

# What this day **is**

- The basics that compound
- Hands-on with a real repo
- Patterns you can take to work tomorrow

::right::

# What it **is not**

- A deep dive into model internals
- A tour of every tool on the market
- A promise that AI replaces engineering

---
layout: default
---

# The Tool Landscape

## Different **harnesses** — same LLMs underneath

<div class="tool-grid">
  <div class="tool-card">
    <img src="/images/tools/githubcopilot.svg" alt="GitHub Copilot" />
    <div class="tool-label">GitHub Copilot</div>
  </div>
  <div class="tool-card">
    <img src="/images/tools/anthropic.svg" alt="Claude Code" />
    <div class="tool-label">Claude Code</div>
  </div>
  <div class="tool-card">
    <img src="/images/tools/cursor.svg" alt="Cursor" />
    <div class="tool-label">Cursor</div>
  </div>
  <div class="tool-card">
    <img src="/images/tools/gnubash.svg" alt="CLIs" />
    <div class="tool-label">CLIs (gh copilot, claude)</div>
  </div>
</div>

<div style="margin-top: 64px; font-size: 1rem; color: var(--tt-text-muted); text-align: center; max-width: 80%; margin-left: auto; margin-right: auto;">
  A <strong>harness</strong> is the scaffolding around the model — chat UI, tool use, file access, agents, memory. The harness is what you're choosing; the LLM is replaceable.
</div>

---
layout: default
---

# Setup · Pick Your Harness

Same GitHub account, same models, two surfaces. Pick one — or use both side by side.

We'll demo in both throughout the day. All hands-on tasks work either way.

---
layout: two-cols
---

# A · VS Code Plugin

1. Install the **GitHub Copilot** extension
2. Sign in via the Accounts menu (bottom-left)
3. Open Chat: `Cmd/Ctrl + Alt + I`
4. Verify the model picker appears in the chat header

<br>

Best for: interactive coding, file context, inline completions.

::right::

# B · Copilot CLI

```bash
npm install -g @github/copilot
copilot          # first run → auth flow
```

- Alt: `brew install copilot-cli`
- Alt: `winget install GitHub.Copilot`
- Verify: `copilot --version`

<br>

Best for: scripting, headless runs, background agents (covered in M4).

---
layout: default
---

# Ground Rules

- Experiment — break things, that is the point
- Ask anytime — interruptions welcome
- Pair up for hands-on if you want
- Slides are reference — the value is in the doing
