'use client';

import { useParams, usePathname } from 'next/navigation';
import HomeNav from './DesktopHomeIndex';
import DesktopHomeIndex from './DesktopHomeIndex';

const DesktopNavbarIndexProvider = () => {
  const pathname = usePathname().split('/')[2] || '';
  const { locale } = useParams();
  const url = `/${locale}${pathname}`;

  return <>{url === `/${locale}` ? <DesktopHomeIndex /> : null}</>;
};

export default DesktopNavbarIndexProvider;
