// background.js

chrome.action.onClicked.addListener((tab) => {
  // Execute custom.js in the context of the current tab when the extension icon is clicked
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["custom.js"],
  });
});

// Listen for messages from the popup and trigger content.js injection
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "runCustomScript") {
    chrome.scripting.executeScript({
      target: { allFrames: true },
      files: ["custom.js"],
    });
    sendResponse({ status: "custom script executed" });
  }
});
