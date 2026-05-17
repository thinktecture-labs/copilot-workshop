---
theme: default
title: AI-Assisted Coding
subtitle: The Basics — One-Day Workshop
author: Thinktecture AG
colorSchema: auto
fonts:
  provider: none
transition: slide-left
layout: cover
speaker: Daniel Sogl
handle: danielsogl
role: Principal Consultant AI
---

# AI-Assisted Coding

::subtitle::

The Basics — One-Day Workshop

---
layout: default
---

# About me

## Daniel Sogl

<div style="display: flex; align-items: center; gap: 56px; margin-top: 16px;">
  <div
    role="img"
    aria-label="Daniel Sogl"
    style="width: 220px; height: 220px; border-radius: 50%; background-image: url('/images/profile.jpeg'); background-size: cover; background-position: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.12);"
  ></div>
  <div style="flex: 1;">
    <ul style="margin: 0;">
      <li>Consultant @ <strong>Thinktecture AG</strong></li>
      <li>MVP – Developer & Web Technologies</li>
      <li>Focus: Developer Productivity & Generative AI</li>
      <li>Socials: <strong>linktr.ee/daniel_sogl</strong></li>
    </ul>
    <div style="display: flex; gap: 18px; align-items: center; margin-top: 24px;">
      <TtIcon name="ai-agent" color="red" size="64px" />
      <TtIcon name="code-01" color="black" size="64px" />
      <TtIcon name="cloud" color="blue" size="64px" />
    </div>
  </div>
  <div
    role="img"
    aria-label="Thinktecture"
    style="height: 64px; width: 84px; background-image: url('/logos/logo_rot_vector.svg'); background-size: contain; background-position: center; background-repeat: no-repeat; flex-shrink: 0; align-self: flex-end;"
  ></div>
</div>

---
layout: default
---

# Agenda · Morning

| Time          | Block                                                |
| ------------- | ---------------------------------------------------- |
| 09:00 – 09:25 | Welcome + Setup                                      |
| 09:25 – 11:00 | **M1** — Context Management (3 mini hands-on inside) |
| 11:00 – 11:25 | ☕ Break                                             |
| 11:25 – 12:30 | **M2** — Prompting                                   |
| 12:30 – 13:30 | 🍽 Lunch                                             |

---
layout: default
---

# Agenda · Afternoon

| Time          | Block                                        |
| ------------- | -------------------------------------------- |
| 13:30 – 14:00 | Hands-on 2 — Planning + Prompting            |
| 14:00 – 15:00 | **M3** — Custom Workflows (3a + 3b)          |
| 15:00 – 15:25 | ☕ Break                                     |
| 15:25 – 16:20 | **M4** — GitHub Copilot CLI (Hands-on 4 + 5) |
| 16:20 – 17:00 | **M5** — Outlook, wrap-up, Q&A               |

---
layout: default
---

# Hands-on Playground

## copilot-workflow-demo

- Angular 21 + NgRx Signal Store + Material 3
- Pre-wired: `.github/instructions/`, `.github/prompts/`, `.github/agents/`, `.mcp.json`
- Domain: Kanban-style task board
- Bring your own repo if you prefer

<br>

Clone once, experiment all day.

```bash
git clone https://github.com/danielsogl/copilot-workflow-demo
cd copilot-workflow-demo && npm install && npm start
```

---
src: ./pages/00-intro.md
---

---
src: ./pages/01-context.md
---

---
src: ./pages/02-prompting.md
---

---
src: ./pages/03-workflows.md
---

---
src: ./pages/04-copilot-cli.md
---

---
src: ./pages/05-outlook.md
---

---
layout: end
website: thinktecture.com
email: daniel.sogl@thinktecture.com
---

# Thank you!

<div style="font-size: 1.8rem; font-weight: 500; color: white; margin-top: 12px;">Questions?</div>

<div style="display: flex; flex-direction: column; align-items: center; gap: 16px; margin-top: 40px;">
  <div style="background-color: white; padding: 14px; border-radius: 14px; box-shadow: 0 4px 14px rgba(0,0,0,0.18);">
    <div role="img" aria-label="linktr.ee/daniel_sogl" style="width: 200px; height: 200px; background-image: url('/images/qr-linktree.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>
  </div>
  <div style="text-align: center;">
    <div style="font-size: 0.95rem; font-weight: 400; opacity: 0.85;">Slides & socials</div>
    <div style="font-size: 1.4rem; font-weight: 600;">linktr.ee/daniel_sogl</div>
  </div>
</div>
