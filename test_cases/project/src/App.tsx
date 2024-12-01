import React, { useState } from 'react';
import { CodeBox } from './components/CodeBox';
import { Play, Brain, ChevronRight } from 'lucide-react';

function App() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-indigo-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Way to Learn DSA
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master Data Structures and Algorithms through hands-on practice. Start with simple examples
              and progress to complex problems.
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-6">
            {!showCode ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <ChevronRight className="animate-bounce" />
                  <span>Click to see your first coding example</span>
                </div>
                <button
                  onClick={() => setShowCode(true)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-3 transform hover:scale-105 hover:shadow-xl"
                >
                  <Play size={24} />
                  Start Learning
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-700">Your First Program</h2>
                <CodeBox/>
                <p className="text-sm text-gray-600 italic">
                  This is a simple print statement in Python - a perfect way to start your coding journey!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;