---
layout: section
---

# Module 3

Custom Workflows — stop repeating yourself

---
layout: default
---

# The Recurring-Task Problem

You and your team type the same prompts every week:

- "Write a Vitest spec for this file"
- "Generate a CRUD store for this entity"
- "Review this PR for accessibility"
- "Migrate this component from `ngOnInit` to `effect()`"

<br>

→ Package it once. Use it forever. Share with the team.

---
layout: default
---

# Four Customisation Layers

|                      | Always-on rule | On-demand by model | User-triggered | External system |
| -------------------- | -------------- | ------------------ | -------------- | --------------- |
| **Instructions**     | ✅             | —                  | —              | —               |
| **Skills**           | —              | ✅                 | optional       | —               |
| **Reusable Prompts** | —              | —                  | ✅             | —               |
| **Custom Agents**    | —              | ✅                 | ✅             | (via tools)     |

This module focuses on the bottom two: **Prompts** and **Agents**.

---
layout: default
---

# Reusable Prompts — The Idea

- A markdown file with parameters and steps
- Lives in `.github/prompts/*.prompt.md`
- Invoked with `/prompt-name` in chat
- Versioned in git → the whole team benefits
- Encode your team's best practice as code

<br>

The fastest way to standardise common work.

---
layout: default
---

# `.prompt.md` Anatomy

```markdown
---
description: Generate an NgRx Signal Store with CRUD.
name: ngrx-signals-store-crud
agent: signal-store-creator # optional: dispatch to a custom agent
tools: ['edit', 'search', 'execute/runTests', 'eslint/*']
---

# Goal

Generate a complete NgRx Signal Store with CRUD ops.

# Prerequisites

1. Entity model is defined and in chat context
2. Store name (e.g. `TaskStore`)
3. Entity name (e.g. `Task`)

# Steps

1. Analyse the entity, check for an existing API service
2. Generate `data/state/<name>-store.ts`
3. Generate Vitest spec
4. Run `npm test` and fix failures
```

---
layout: default
---

# Real Example: `ngrx-signals-store-crud`

Walks through:

1. Reads the provided entity model
2. Creates an API service if one doesn't exist
3. Generates a Signal Store with `withEntities` + CRUD methods
4. Generates a matching Vitest spec
5. Runs `npm test` — fixes failures automatically

<br>

One slash command → a complete feature slice.

---
layout: default
---

# Let Copilot Scaffold It · `/create-prompt`

Don't hand-craft `.prompt.md` files — let Copilot generate them.

```text
/create-prompt        → guided generation of a .prompt.md file
/prompts              → menu: pick existing or create new
```

Typical flow:

1. Type `/create-prompt` in Chat
2. Describe the recurring task — _"Write a Vitest spec for the file in context"_
3. Copilot asks for tools, scope, output format
4. `.prompt.md` is generated with frontmatter + numbered steps
5. Refine and commit — your team gets it via `git pull`

<br>

**Bonus:** during a chat that worked well, ask _"extract this workflow as a prompt"_ — Copilot saves the conversation as a reusable prompt file.

---
layout: default
---

# Invocation in Copilot Chat

```text
/ngrx-signals-store-crud

Entity: Tag
Store: TagStore
```

- The slash menu shows available prompts
- Arguments captured from the chat
- Output follows the template you wrote

<br>

The user sees a one-liner. The prompt file does the heavy lifting.

---
layout: default
---

# `tools:` Allowlist

```yaml
tools: ['edit', 'search', 'execute/runTests', 'eslint/*', 'context7/*']
```

- Restrict what the prompt is allowed to do
- `*` wildcards permitted (e.g. `eslint/*` = all ESLint tools)
- Helps the model pick the right tool faster
- Prevents accidental scope creep

---
layout: default
---

# Custom Agents — When a Prompt Isn't Enough

- Prompts are templates the **user** triggers
- Agents are specialists the **model** can delegate to
- Have their own system prompt, tools, model
- Compose: a planner agent calls a reviewer agent
- Live in `.github/agents/*.agent.md`

---
layout: default
---

# `.agent.md` Anatomy

```markdown
---
description: |
  Use this agent when you need to create a new NgRx
  Signal Store for a domain feature following the
  project's guidelines.
name: signal-store-creator
argument-hint: Describe your feature's state requirements
tools: ['edit', 'search', 'execute/runTests', 'context7/*', 'angular-cli/*', 'eslint/*']
---

You are an NgRx Signal Store expert. Your task is to
create a complete signal store implementation for a
domain feature following the project's DDD architecture
and NgRx Signals guidelines.

## Workflow

1. Gather requirements: domain name, store name, state shape
2. Create model files in data/models/
3. Create infrastructure (API service) in data/infrastructure/
4. Create the store in data/state/
5. Generate Vitest specs
6. Run tests, fix errors
```

---
layout: default
---

# Description: The Trigger

```yaml
# ❌ Vague — model never delegates
description: 'NgRx helper'

# ✅ Specific — model picks it for the right job
description: |
  Use this agent when the user needs to create a new
  NgRx Signal Store for a domain feature following the
  project's DDD guidelines.
```

The model decides _when_ to call the agent based on this description. Make it explicit.

---
layout: default
---

# Let Copilot Scaffold It · `/create-agent`

Same playbook as instructions and prompts — Copilot writes the `.agent.md` for you.

```text
/create-agent         → guided generation of a .agent.md file
```

Typical flow:

1. Type `/create-agent` in Chat
2. Describe the specialist — _"a security review agent for Angular components"_
3. Copilot asks about tools, model, when to delegate
4. `.agent.md` is generated with system prompt + `tools:` allowlist + sharp `description`
5. Wire it into a prompt via `agent: <name>` — or let the model pick it up automatically

<br>

> 💡 `.chatmode.md` files were renamed to `.agent.md` — rename + relocate any old ones.

---
layout: default
---

# Built-in Specialised Agents

Most assistants ship a small fleet out of the box:

- **explore** — read-only codebase search
- **code-review** — review a diff against rules
- **test-runner** — run tests, parse failures
- **plan** — design an approach, no edits

<br>

Your custom agents extend this fleet with team-specific specialists.

---
layout: default
---

# Demo Repo's Agent Fleet

```
.github/agents/
├── signal-store.agent.md           # generate Signal Stores
├── angular-reviewer.agent.md       # Angular 21 code review
├── feature-scaffolder.agent.md     # full DDD feature slice
├── unit-test-writer.agent.md       # Vitest specs
├── playwright-test-planner.agent.md  # design E2E plan
├── playwright-test-generator.agent.md # generate BDD specs
├── playwright-test-healer.agent.md   # fix flaky tests
├── refactor-to-signals.agent.md    # legacy → signals
└── material-theme-advisor.agent.md # Material 3 theming
```

Each one a focused specialist. They compose.

---
layout: two-cols
---

# Use a Prompt when…

- One-shot, well-defined task
- User picks _when_ to run it
- Single output expected
- Linear step-by-step is fine
- Lives in `.github/prompts/`

::right::

# Use an Agent when…

- Multi-step workflow with branches
- Model decides when to call it
- Needs specific tools or model
- Composes with other agents
- Lives in `.github/agents/`

<br>

A prompt can _dispatch_ to an agent via the `agent:` frontmatter field.

---
layout: default
---

# Composition: Prompts Calling Agents

```markdown
---
name: ngrx-signals-store-crud
agent: signal-store-creator # ← dispatches to this agent
---

# Goal

Generate a complete Signal Store with CRUD ops.
```

The user triggers the **prompt** with a slash command.

The prompt **dispatches** to the agent — which has the right tools and system prompt.

Best of both worlds.

---
layout: default
---

# Versioning Workflows

- Commit `.github/prompts/` and `.github/agents/` to git
- Treat them like code: review them, refactor them, deprecate them
- New hire opens a PR by running your prompt → instant ramp-up
- Workshops, onboarding, code review — all become repeatable

<br>

This is how AI workflows become **organisational** assets, not personal hacks.

---
layout: default
---

# Skills vs Prompts vs Agents

|                  | Skill                               | Prompt                         | Agent                             |
| ---------------- | ----------------------------------- | ------------------------------ | --------------------------------- |
| **Triggered by** | Model picks it based on description | User runs `/name`              | Model delegates _or_ user runs    |
| **Scope**        | Capability bundle (md + scripts)    | Template for one task          | Specialist with own system prompt |
| **Composes?**    | Skills can wrap scripts/CLIs        | Prompts can dispatch to agents | Agents can call other agents      |
| **File**         | `<skill>/SKILL.md`                  | `.github/prompts/*.prompt.md`  | `.github/agents/*.agent.md`       |

Three different tools. Pick by **what triggers the workflow**.

---
layout: two-cols
---

# Copilot

- `.github/prompts/*.prompt.md`
- `.github/agents/*.agent.md`
- Slash invocation in chat
- `tools:` allowlist per file
- `agent:` for dispatch

::right::

# Claude Code

- `.claude/commands/*.md`
- `.claude/agents/*.md`
- `/command-name` in CLI
- `allowed-tools:` frontmatter
- `model:` per agent

<br>

Both store everything as markdown in git. Both ride the same mental model.

---
layout: default
---

# 🛠 Hands-on 3a · Reusable Prompts · 15 min

## Write a slash command for a weekly task

1. Inspect `.github/prompts/ngrx-signals-store-crud.prompt.md` — frontmatter, steps, tools
2. Pick **one** task you actually repeat:
   - "Write a Vitest spec for this file"
   - "Review this diff for accessibility"
   - "Generate a Playwright BDD scenario for the current component"
3. **Scaffold** the file — type `/create-prompt` in Copilot Chat and describe the task
4. Sharpen the generated `description`, `tools:`, and numbered steps
5. Invoke it via `/<name>` in chat on a demo file
6. Refine the steps based on what the model actually did

---
layout: default
---

# 🛠 Hands-on 3b · Custom Agents · 15 min

## Build a specialist the model can delegate to

1. Inspect `.github/agents/signal-store.agent.md` — system prompt, `tools:`, description
2. **Scaffold** the file — type `/create-agent` in Copilot Chat and describe a focused role:
   - **angular-reviewer** — Angular 21 + Material 3 review
   - **vitest-author** — write spec files for changed code
   - **accessibility-auditor** — WCAG checks on components
3. Sharpen the `description` so the model knows _when_ to pick it
4. **Dispatch** from a prompt: add `agent: <name>` to a `.prompt.md` and run it
5. **Bonus:** commit prompt + agent together. That's a reusable team workflow.
