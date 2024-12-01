chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          if (message.type === "evaluateXPath") {
            const results = [];
            const xpathResult = document.evaluate(
              message.xpath,
              document,
              null,
              XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
              null
            );
            for (let i = 0; i < xpathResult.snapshotLength; i++) {
              results.push(xpathResult.snapshotItem(i).textContent);
            }
            sendResponse({ results });
          }
        });
      },
    });
  });
  