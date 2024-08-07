import { Caption } from './caption';
import React from 'react';

interface SnippetProps {
  children: React.ReactNode;
  scroll?: boolean;
  caption?: React.ReactNode;
}

export const Snippet: React.FC<SnippetProps> = ({ children, scroll = true, caption = null }) => (
  <div className="my-6">
    <pre
      className={`
      p-4
      text-sm
      bg-gray-800 text-white
      dark:bg-[#222] dark:text-gray-300

      ${scroll ? 'overflow-scroll' : 'whitespace-pre-wrap break-all overflow-hidden'}
    `}
    >
      <code>{children}</code>
    </pre>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);
