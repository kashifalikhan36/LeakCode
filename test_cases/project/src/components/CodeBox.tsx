import React from 'react';
import { Code2 } from 'lucide-react';
import Data from './Data.tsx';

export function CodeBox() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 w-full max-w-xl shadow-xl">
      <div className="flex items-center gap-2 mb-3 text-gray-400 border-b border-gray-700 pb-2">
        <Code2 size={20} />
        <span className="font-mono">Python Example</span>
      </div>
      <Data/>
    </div>
  );
}