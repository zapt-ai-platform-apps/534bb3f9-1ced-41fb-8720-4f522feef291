import React from 'react';

interface FortuneCardProps {
  message: string;
  isVisible: boolean;
}

const FortuneCard: React.FC<FortuneCardProps> = ({ message, isVisible }) => {
  return (
    <div 
      className={`
        mt-8 p-6 bg-amber-50 rounded-lg shadow-lg border-2 border-amber-200
        max-w-md w-full mx-auto transform transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className="text-center">
        <p className="text-lg text-amber-900 italic font-medium">"{message}"</p>
      </div>
    </div>
  );
};

export default FortuneCard;