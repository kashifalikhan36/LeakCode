import React from 'react';
import ReactDOM from 'react-dom';

// Function to evaluate XPath and return results
const evaluateXPath = (xpathExpression) => {
  const result = [];
  const xpathResult = document.evaluate(
    xpathExpression,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  // Collect matching nodes
  for (let i = 0; i < xpathResult.snapshotLength; i++) {
    result.push(xpathResult.snapshotItem(i));
  }
  return result;
};

// React Component for Interaction
const XPathEvaluator = () => {
  const [xpath, setXPath] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleEvaluate = () => {
    const nodes = evaluateXPath(xpath);
    setResults(nodes.map((node) => node.textContent));
  };

  return (
    <div style={{ position: "fixed", top: "10px", left: "10px", background: "#fff", padding: "10px", zIndex: 9999, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
      <h3>XPath Evaluator</h3>
      <input
        type="text"
        placeholder="Enter XPath"
        value={xpath}
        onChange={(e) => setXPath(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleEvaluate}>Evaluate</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

// Inject React Component into the Webpage
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
ReactDOM.render(<XPathEvaluator />, appContainer);
