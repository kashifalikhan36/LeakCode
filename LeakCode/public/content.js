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
      console.log("1 ok");

      // const session_2 = await ai.languageModel.create({
      //   systemPrompt:
      //     "Pretend to be a LeetCode master. I will provide you with a code , and your task is to give me shortest and easiest explanation in very short and simple way and in simple and short steps of it with new lines. Do not modify or rewrite the code. Just explain how the code works and what it does.",
      // });

      // const response_2 = await session_2.prompt(element.textContent);
      // console.log("2 ok");

      const session_3 = await ai.languageModel.create({
        systemPrompt:
          "You have to Pretend like a Youtube Video Searecher. I will give you the code and You will write a query to serach in 4-8 words only for youtube to get right video of it . Example:- 'two sum question leetcode' ",
      });

      const response_3 = await session_3.prompt(element.textContent);
      console.log("3 ok");
      let explain = "This Section is in Under Development";

      function openCodeViewerPage(code, explain, query) {
        // Encode the code to be URL-safe
        const encodedCode = encodeURIComponent(code);
        const encodedExplain = encodeURIComponent(explain);
        const encodedVideolink = encodeURIComponent(query);
        // Open the codeViewer.html in a new tab with the code as a URL parameter

        window.open(
          `https://kashifalikhan36.github.io/LeakCode?code=${encodedCode}&explanation=${encodedExplain}&queryvideo=${encodedVideolink}`,
          "_blank"
        );
      }

      // Call the function to open the new page with the code
      openCodeViewerPage(response, explain, response_3);
    } catch (error) {
      console.error("Error interacting with the language model:", error);
    }
  } else {
    console.log("Element not found.");
  }
}, 10000); // 30000 milliseconds = 30 seconds
