import React from 'react';

const ZaptBadge: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs text-amber-700 opacity-70 hover:opacity-100 transition-opacity"
      >
        Made on ZAPT
      </a>
    </div>
  );
};

export default ZaptBadge;