
import React, { useState } from 'react';
import { FunnelState } from './types';
import Quiz from './components/Quiz';
import SalesPage from './components/SalesPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<FunnelState>('QUIZ');

  const handleQuizComplete = () => {
    setCurrentView('SALES_PAGE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {currentView === 'QUIZ' && (
        <Quiz onComplete={handleQuizComplete} />
      )}
      {currentView === 'SALES_PAGE' && (
        <SalesPage />
      )}
    </div>
  );
};

export default App;
