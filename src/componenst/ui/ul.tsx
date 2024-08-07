import React from 'react';

interface ULProps {
  children: React.ReactNode;
}

export function UL({ children }: ULProps) {
  return <ul className="my-5 list-none list-inside">{children}</ul>;
}
