'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Props {
  children: ReactNode;
  path: string;
  styling?: string;
}

const LocaleLink = ({ children, path, styling }: Props) => {
  const { locale } = useParams();
  return (
    <Link href={`/${locale}${path}`} className={styling}>
      {children}
    </Link>
  );
};

export default LocaleLink;
