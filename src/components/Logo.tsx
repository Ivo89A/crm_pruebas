import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={className}>
      <img 
        src="/ChatGPT Image 14 jun 2025, 12_28_02.png" 
        alt="Connections Logo" 
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};

export default Logo;