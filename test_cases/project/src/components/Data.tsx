import React, { useState, useEffect } from "react";

declare const ai: any; // Replace this with the actual type if available

// Function to evaluate XPath Expression
function evaluateXPath(xpathExpression: string): HTMLElement | null {
  const xpathResult = document.evaluate(
    xpathExpression,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return xpathResult.singleNodeValue as HTMLElement | null;
}

const Data: React.FC = () => {
  const [code, setCode] = useState<string>("Fetching code...");
  const [explanation, setExplanation] = useState<string>("Fetching explanation...");

  // Function to interact with the AI and fetch the code and explanation
  const getAI = async () => {
    setTimeout(async () => {
      const xpath =
        '//*[@id="editor"]/div[2]/div[1]/div/div/div[1]/div[2]/div[1]/div[5]';
      const element = evaluateXPath(xpath);
      
      setCode("Error: Element not found.");
      setExplanation("Error: Element not found.");
      console.log("Waited for 10 seconds.");
      console.log("Element found:", element);
      if (element) {
        try {
          // AI call to generate code
          console.log("Element found:", element.textContent);
          console.log("STart ai");
          const session = await ai.languageModel.create({
            systemPrompt:
              "Pretend to be a LeetCode master and give me code without changing the logic whenever I provide my code. Return code by improving it, don't change the logic or variables, and make the code work. Example: 'def twoSum(nums, target):\n    for i in range(len(nums)):\n        complement = target - nums[i]\n        for j in range(i + 1, len(nums)):\n            if nums[j] == complement:\n                return [nums[i], nums[j]]\n    return []\n",
          });
          console.log("answer");
          const response = await session.prompt(element.textContent || "");
          console.log("Code Response:", response);
          setCode(response || "No code received.");

          // AI call to generate explanation
          const session_2 = await ai.languageModel.create({
            systemPrompt:
              "Pretend to be a LeetCode master. I will provide you with a code snippet, and your task is to give me a detailed explanation of it. Do not modify or rewrite the code. Just explain how the code works and what it does. Make sure the explanation is clear and thorough.",
          });

          const response_2 = await session_2.prompt(element.textContent || "");
          console.log("Explanation Response:", response_2);
          setExplanation(response_2 || "No explanation received.");
        } catch (error) {
          console.error("Error interacting with the language model:", error);
          setCode("Error: Unable to fetch code.");
          setExplanation("Error: Unable to fetch explanation.");
        }
      } else {
        console.log("Element not found.");
        setCode("Error: Element not found.");
        setExplanation("Error: Element not found.");
      }
    }, 10000); // 10 seconds delay
  };

  useEffect(() => {
    getAI();
    const startButton = document.getElementById("start");
    if (startButton) {
      startButton.style.display = "none";
    }
  }, []);

  return (
    <div className="p-4">
      <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
        {code}
      </pre>
      <p className="text-sm text-gray-600 italic mt-4">
        {explanation}
      </p>
    </div>
  );
};

export default Data;

