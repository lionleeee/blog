import React from 'react';

interface CodeProps {
  children: React.ReactNode;
}

export const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <code
      className={`
        [p_&]:text-sm
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded-sm
        [p_&]:bg-gray-200
        dark:[p_&]:bg-[#333]
      `}
    >
      {children}
    </code>
  );
};
