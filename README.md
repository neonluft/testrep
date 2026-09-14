# testrep
# testrep
# testrep

## Dark Theme Toggle

A button in the page `<header>` lets the user switch between light and dark themes.

### How it works
- Clicking the "Dark Mode" / "Light Mode" button toggles a `data-theme="dark"` attribute on the `<body>` element.
- `styles.css` defines theme colors as CSS custom properties under `:root` (light/default) and overrides them under the `[data-theme="dark"]` selector.
- The chosen theme is saved to `localStorage` under the key `theme`, so it persists across page reloads.
- On page load, `script.js` checks `localStorage` and re-applies the saved theme automatically.

### Files touched
- `index.html` — added `<header>` with the toggle button
- `script.js` — click listener that flips `data-theme` on `<body>` and persists the choice
- `styles.css` — theme variables and `[data-theme="dark"]` overrides