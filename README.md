# Adrián Salas — Personal Portfolio

A dark, refined personal website for a Software Engineer.  
Bilingual: **English** and **Spanish** via a built-in language switcher.

---

## Project Structure

```
adrian-salas-portfolio/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── styles.css      ← All styles & CSS variables
├── js/
│   ├── i18n.js         ← All translatable strings (EN / ES)
│   └── main.js         ← Language switcher + scroll nav logic
├── assets/
│   └── img/            ← Place your photos here
└── README.md
```

---

## Getting Started in IntelliJ IDEA

1. **Open the project**: `File → Open` → select the `adrian-salas-portfolio` folder
2. **Run it**: Open `index.html`, hover top-right corner → click a browser icon  
   *(or right-click → Open In → Browser)*
3. **Live reload**: Install the **LiveEdit** plugin for instant preview while editing

> **Note:** The JS uses ES Modules (`import/export`), so open the site via a
> local server rather than opening `index.html` directly as a `file://` URL.
> In IntelliJ, the built-in server handles this automatically when you click
> the browser button.

---

## How to Customise

### Personal info
Edit **`index.html`** — search for these placeholders and replace them:

| Placeholder       | Where                          |
|-------------------|--------------------------------|
| `X years`         | About section, `aboutP1` text  |
| `Company Name`    | Experience section             |
| `Previous Co.`    | Experience section             |
| `First Job Inc.`  | Experience section             |
| `Project Alpha…`  | Projects section               |
| `you@email.com`   | Footer + sidebar social links  |
| GitHub / LinkedIn | Sidebar `nav-social` links     |

### Translations
Edit **`js/i18n.js`** — every string has an `en` and `es` value.  
Change either or both to update the bilingual content.

### Adding your photo
1. Copy your photo to `assets/img/photo.jpg`
2. In `index.html`, find the `avatar-placeholder` div and replace it with:
   ```html
   <img src="assets/img/photo.jpg" alt="Adrián Salas" class="avatar-photo">
   ```
3. The `.avatar-photo` style is already commented in `css/styles.css` — uncomment it.

### Colours & fonts
All design tokens are CSS variables at the top of `css/styles.css`:

```css
:root {
  --accent:  #c9a96e;   /* gold — change this to rebrand */
  --bg:      #0d0d0f;   /* main background               */
  --head:    #eeeef8;   /* heading colour                */
  /* … */
}
```

---

## Adding a Blog / Posts (future)

The structure is ready for it. When you want to add posts:
- Create a `posts/` folder at the root
- Add individual `post-slug.html` files using the same `<head>` and nav
- Add a new `#blog` section to `index.html` and a matching key in `i18n.js`

---

## Deployment

This is a plain static site — no build step required.

| Platform        | Steps                                              |
|-----------------|----------------------------------------------------|
| **GitHub Pages**| Push to a repo → Settings → Pages → Deploy from main |
| **Netlify**     | Drag & drop the folder onto netlify.com/drop       |
| **Vercel**      | `vercel` CLI or import from GitHub                 |
