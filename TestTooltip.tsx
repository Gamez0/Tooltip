import React, { useState } from 'react';

interface TestTooltipProps {
  text: string;
  textClassName?: string;
  children: React.ReactElement;
}

const TestTooltip: React.FC<TestTooltipProps> = ({ text, textClassName, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const tempTextClass = textClassName ?? 'top-[0px] left-[70px] ';
  return (
    <div className="relative">
      <div className="inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      <p
        className={`absolute ${
          showTooltip ? 'opacity-100' : 'opacity-0'
        } rounded-[4px] px-8 py-[4px] text-gray-200 leading-2xs text-2xs bg-header whitespace-pre-line w-[316px] h-[56px] ${tempTextClass}`}
      >
        {text}
      </p>
    </div>
  );
};

export default TestTooltip;
