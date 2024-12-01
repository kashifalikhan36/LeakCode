import React, { useState } from 'react';
import { Header } from './components/Header';
import { StartButton } from './components/StartButton';

function App() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-8">
          <Header />
          <div className="w-full flex flex-col items-center gap-6">
            {!showCode ? (
              <StartButton onClick={() => setShowCode(true)} />
            ) : (
              <CodeSection />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;