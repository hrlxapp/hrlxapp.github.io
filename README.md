# HRLX Website

Official static website structure for HRLX on GitHub Pages.

## Current structure

```text
/
├── index.html
├── subscriptions/
│   └── index.html
├── support/
│   └── index.html
├── privacy/
│   └── index.html
├── terms/
│   └── index.html
├── assets/
│   ├── images/
│   │   ├── brand/
│   │   ├── subscriptions/
│   │   └── social/
│   ├── icons/
│   └── screenshots/
├── css/
│   ├── base.css
│   ├── home.css
│   └── subscriptions.css
├── js/
│   ├── main.js
│   └── i18n.js
├── data/
│   └── products.js
├── .nojekyll
└── README.md
```

## Live routes

- `/` — HRLX homepage
- `/subscriptions/` — HRLX Subscriptions
- `/support/` — Support
- `/privacy/` — Privacy
- `/terms/` — Terms

## Important

The current homepage keeps its CSS and JavaScript inline intentionally.
This makes early design iteration easier.

The `css/`, `js/`, and `data/` folders are already reserved so the site can
be separated into reusable files later without changing the repository structure.

Do not place:
- app source code
- API keys
- passwords
- secrets
- private build files

inside this public repository.
