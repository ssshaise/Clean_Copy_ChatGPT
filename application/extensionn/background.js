chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "update") {
      chrome.tabs.create({ url: "https://ruchir-me.netlify.app" });
    }
  });
  