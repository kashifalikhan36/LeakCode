// Function to evaluate an XPath expression and return the matching element
function evaluateXPath(xpathExpression) {
  const xpathResult = document.evaluate(
    xpathExpression,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return xpathResult.singleNodeValue; // Returns the first matching node or null
}

// Wait for 30 seconds before checking for the element
setTimeout(async () => {
  const xpath =
    '//*[@id="editor"]/div[2]/div[1]/div/div/div[1]/div[2]/div[1]/div[5]';
  const element = evaluateXPath(xpath);
  console.log("wait for 30sec");

  if (element) {
    try {
      // Assuming `ai.languageModel.create()` is a valid API call and returns a session object
      const session = await ai.languageModel.create({
        systemPrompt:
          "Pretend to be an LeetCode master and give me code without changing the logic whenever I provide my code. Return code by improving it don't change the logic and variable and make the code working. as Example: 'def twoSum(nums, target):\n    for i in range(len(nums)):\n        complement = target - nums[i]\n        for j in range(i + 1, len(nums)):\n            if nums[j] == complement:\n                return [nums[i], nums[j]]\n    return []\n",
      });

      const response = await session.prompt(element.textContent);
      console.log(response);

      function openCodeViewerPage(code) {
        // Encode the code to be URL-safe
        const encodedCode = encodeURIComponent(code);

        // Open the codeViewer.html in a new tab with the code as a URL parameter
        window.open(
          `https://kashifalikhan36.github.io/LeakCode?code=${encodedCode}`,
          "_blank"
        );
      }

      // Call the function to open the new page with the code
      openCodeViewerPage(response);

      const session_2 = await ai.languageModel.create({
        systemPrompt:
          "Pretend to be a LeetCode master. I will provide you with a code snippet, and your task is to give me a detailed explanation of it. Do not modify or rewrite the code. Just explain how the code works and what it does. Make sure the explanation is clear and thorough.",
      });

      const response_2 = await session_2.prompt(element.textContent);
      console.log(response_2);
    } catch (error) {
      console.error("Error interacting with the language model:", error);
    }
  } else {
    console.log("Element not found.");
  }
}, 10000); // 30000 milliseconds = 30 seconds
