import React from 'react';

interface FortuneButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const FortuneButton: React.FC<FortuneButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        mt-6 px-8 py-3 bg-amber-500 text-white font-semibold rounded-full
        shadow-md transition-all duration-300 transform
        hover:bg-amber-600 hover:shadow-lg focus:outline-none
        active:bg-amber-700 active:scale-95 cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      YES
    </button>
  );
};

export default FortuneButton;