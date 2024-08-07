import { withHeadingId } from './utils';
import React from 'react';

interface H1Props {
  children: React.ReactNode;
}

export function H1({ children }: H1Props) {
  return <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">{withHeadingId(children)}</h1>;
}
