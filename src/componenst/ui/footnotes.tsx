import { A } from './a';
import { P } from './p';
import React from 'react';

interface FootNotesProps {
  children: React.ReactNode;
}

export const FootNotes: React.FC<FootNotesProps> = ({ children }) => (
  <div className="text-base before:w-[200px] before:m-auto before:content[''] before:border-t before:border-gray-300 dark:before:border-[#444] before:block before:my-10">
    {children}
  </div>
);

interface RefProps {
  id: string;
}

export const Ref: React.FC<RefProps> = ({ id }) => (
  <a href={`#f${id}`} id={`s${id}`} className="relative text-xs top-[-5px] no-underline">
    [{id}]
  </a>
);

interface FootNoteProps {
  id: string;
  children: React.ReactNode;
}

export const FootNote: React.FC<FootNoteProps> = ({ id, children }) => (
  <P>
    {id}.{' '}
    <A href={`#s${id}`} id={`f${id}`} className="no-underline">
      ^
    </A>{' '}
    {children}
  </P>
);
