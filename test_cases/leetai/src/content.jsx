// Function to evaluate an XPath expression and get the matching element(s)
function evaluateXPath(xpathExpression) {
    const result = [];
    const xpathResult = document.evaluate(
      xpathExpression,           // XPath expression
      document,                  // Context node (entire document)
      null,                      // Namespace resolver (optional)
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, // Return type
      null                       // Existing result to reuse (optional)
    );
  
    // Loop through the results and collect nodes
    for (let i = 0; i < xpathResult.snapshotLength; i++) {
      result.push(xpathResult.snapshotItem(i));
    }
    return result;
  }
  
  // Example: Extract all headings (h1 elements)
  const headings = evaluateXPath("//h1");
  headings.forEach((heading) => {
    console.log("Heading:", heading.textContent);
  });
  
  // Example: Extract a specific element
  const specificElement = evaluateXPath("//div[@id='main-content']");
  if (specificElement.length > 0) {
    console.log("Specific Element Content:", specificElement[0].textContent);
  }
  