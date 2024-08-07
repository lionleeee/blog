import { withHeadingId } from './utils';
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export function H2({ children }: HeadingProps) {
  return <h2 className="group font-bold text-xl my-8 relative">{withHeadingId(children)}</h2>;
}

export function H3({ children }: HeadingProps) {
  return <h3 className="group font-bold text-lg my-8 relative">{withHeadingId(children)}</h3>;
}
