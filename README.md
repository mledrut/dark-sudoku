# Dark Sudoku

Chrome extension (Manifest V3) that adds a dark mode to [sudoku.com](https://sudoku.com/fr).

## How it works

The sudoku.com grid is drawn in a `<canvas>`, so regular CSS can't recolor the digits or the
grid. The extension applies an `invert(0.92) hue-rotate(180deg)` filter to the whole page: the
background turns dark, the digits turn light, and the hue rotation preserves the site's blues.
Images and videos are re-inverted to keep their normal colors.

## Installation

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode** (toggle in the top right).
3. Click **Load unpacked** and select this folder.
4. Go to [sudoku.com/fr](https://sudoku.com/fr) — dark mode is on by default.

## Usage

Click the extension icon in the toolbar to toggle dark mode on/off. An "OFF" badge is shown
when it's disabled. The setting is synced via your Chrome account (`chrome.storage.sync`) and
applies instantly to all open sudoku.com tabs.

## Files

- `manifest.json` — MV3 manifest
- `dark.css` — the inversion filter, scoped under the `dark-sudoku-on` class
- `content.js` — adds/removes the class based on the stored setting
- `background.js` — service worker: handles the icon click and badge
- `icons/` — generated icons (dark grid with a blue cell)
