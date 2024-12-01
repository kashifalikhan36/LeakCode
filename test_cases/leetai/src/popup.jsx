import React, { useState } from "react";
import "./Popup.css";

function Popup() {
  const [xpath, setXPath] = useState("");
  const [results, setResults] = useState([]);

  const sendXPathToContentScript = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { type: "evaluateXPath", xpath },
        (response) => {
          if (response && response.results) {
            setResults(response.results);
          }
        }
      );
    });
  };

  return (
    <div className="App">
      <h3>XPath Evaluator</h3>
      <input
        type="text"
        placeholder="Enter XPath"
        value={xpath}
        onChange={(e) => setXPath(e.target.value)}
      />
      <button onClick={sendXPathToContentScript}>Evaluate</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Popup;
