import { Code2 } from 'lucide-react';
import React from "react";

export function StartButton({code = `print("Hello, World!")`,explanation = `This line of code prints the text "Hello, World!" to the console.`}) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-700">Your Logic our Help</h2>
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-xl shadow-xl">
      <div className="flex items-center gap-2 mb-3 text-gray-400 border-b border-gray-700 pb-2">
        <Code2 size={20} />
        <span className="font-mono">Solution</span>
      </div>
      <div className="p-4">
      <div className="p-4">
      <pre id="code-1" className="text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
        {code}
      </pre>
      <p id="explain-1" className="text-sm text-gray-600 italic mt-4">
        {explanation}
      </p>
    </div>
    </div>
    </div>
      <p className="text-sm text-gray-600 italic">
        It's a journey to code See this solution code when you get stuck and get to know what you are doing wrong
      </p>
    </div>
  );
}