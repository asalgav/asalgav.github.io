# Portfolio Project Memory

## Stack
- Pure static site (HTML/CSS/Vanilla JS) on GitHub Pages, no build step
- `js/main.js` is `type="module"` (imports `js/i18n.js`)
- Firebase Auth uses CDN compat SDK loaded via regular `<script>` tags
- `js/auth-config.js` and `js/auth.js` are regular (non-module) scripts sharing the global scope

## Key Files
- `index.html` — single page, all sections
- `css/styles.css` — all styles, dark theme (vars: --bg, --bg2, --bg3, --line, --accent, etc.)
- `js/main.js` — lang switcher (exposes `window.setLang`) + nav scroll observer
- `js/i18n.js` — translation object, exported as default
- `js/auth-config.js` — Firebase config placeholder + ALLOWED_EMAILS allowlist
- `js/auth.js` — auth logic (modal, sign-in/up/out, auth state observer)

## Auth Module (implemented 2026-02-21)
- Firebase Email/Password auth via CDN compat SDK v10.12.2
- Sign-up restricted by `ALLOWED_EMAILS` client-side check in `auth-config.js`
- `#private` section hidden via `.auth-hidden` class, revealed on auth state change
- Auth modal (`#auth-modal-overlay`) with sign-in/sign-up tabs, ESC + click-outside close
- `nav-private-li` + `mobile-nav-private` hidden by default, shown when logged in
- `nav-signin-btn` / `nav-signout-btn` toggle visibility based on auth state
- Resume download link points to `assets/resume.pdf` (user must place file there)

## User Prerequisites (Firebase)
User must fill in `js/auth-config.js` with real Firebase config values before auth works.
Steps: Create Firebase project → Enable Email/Password auth → Copy firebaseConfig → Paste in auth-config.js → Add allowed emails to ALLOWED_EMAILS array.

## Conventions
- `data-i18n` attributes on all translated elements; `setLang()` sets `innerHTML`
- Sidebar nav: 220px fixed left; mobile nav: fixed bottom bar (shown at ≤900px)
- Section numbering: 01 Hero, 02 About, 03 Exp, 04 Skills, 05 Projects, 06 Hobbies, 07 Private
