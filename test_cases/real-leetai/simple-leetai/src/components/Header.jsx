import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Brain className="w-10 h-10 text-indigo-600" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Best Way to Learn DSA
        </h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Master DSA
      </p>
    </div>
  );
}