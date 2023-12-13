'use client';

import { smoothScrollTo } from '@/lib/smoothScroll';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  classes?: string;
  scrollToId: string;
}

export const SmoothScrollLink: FC<Props> = ({
  children,
  classes,
  scrollToId,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default behavior of anchor element
    smoothScrollTo(scrollToId);
  };

  return (
    <a href={`#${scrollToId}`} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};
