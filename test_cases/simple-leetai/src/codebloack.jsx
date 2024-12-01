import React from "react";

const CodeBlock = ({ code }) => {
  return (
    <div className="relative w-full font-sans bg-zinc-950">
      <div
        style={{
          color: "rgb(227, 234, 242)",
          background: "transparent",
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          overflowWrap: "normal",
          lineHeight: "1.5",
          tabSize: 4,
          hyphens: "none",
          padding: "1.5rem 1rem",
          margin: 0,
          overflow: "auto",
          width: "100%",
        }}
      >
        <code
          style={{
            whiteSpace: "pre",
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
          }}
        >
          {code}
        </code>
      </div>
    </div>
  );
};

export default CodeBlock;
