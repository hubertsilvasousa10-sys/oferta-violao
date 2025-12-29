
import React, { useState, useEffect } from 'react';
import { FunnelState } from './types';
import Quiz from './components/Quiz';
import SalesPage from './components/SalesPage';
import SpecialOffer from './components/SpecialOffer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<FunnelState>('QUIZ');

  // Manual routing based on pathname
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/ofertaespecial') {
      setCurrentView('OFFER_SPECIAL');
    }
  }, []);

  // Back Redirect Logic
  useEffect(() => {
    // Only apply back-redirect if NOT on the special offer page
    if (currentView !== 'OFFER_SPECIAL') {
      // Push an extra entry into the history stack
      window.history.pushState(null, '', window.location.href);

      const handlePopState = () => {
        // When user clicks back, redirect to special offer
        window.history.pushState(null, '', window.location.href);
        setCurrentView('OFFER_SPECIAL');
        window.history.replaceState(null, '', '/ofertaespecial');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, [currentView]);

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
      {currentView === 'OFFER_SPECIAL' && (
        <SpecialOffer />
      )}
    </div>
  );
};

export default App;
