const CLASS_NAME = "dark-sudoku-on";

function applyState(enabled) {
  document.documentElement.classList.toggle(CLASS_NAME, enabled);
}

chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
  applyState(enabled);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.enabled) {
    applyState(changes.enabled.newValue);
  }
});
