import { Code2 } from 'lucide-react';
import React from "react";

export function StartButton() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-700">Solution Window Will Open Automatically After 30 Mins</h2>
      <p className="text-sm text-gray-600 italic">
        If you get stuck, You will get solution code in 30 Mins to see where you went wrong and learn from it.
      </p>
    </div>
  );
}