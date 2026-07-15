function updateBadge(enabled) {
  chrome.action.setBadgeText({ text: enabled ? "" : "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: "#6b7280" });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
    chrome.storage.sync.set({ enabled });
    updateBadge(enabled);
  });
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get({ enabled: true }, ({ enabled }) => updateBadge(enabled));
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
    const next = !enabled;
    chrome.storage.sync.set({ enabled: next });
    updateBadge(next);
  });
});
