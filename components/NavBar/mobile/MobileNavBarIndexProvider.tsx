'use client';

import { useParams, usePathname } from 'next/navigation';
import DesktopHomeIndex from '../desktop/DesktopHomeIndex';
import MobileHomeIndex from './MobileHomeIndex';


const MobileNavbarIndexProvider = () => {
  const pathname = usePathname().split('/')[2] || '';
  const { locale } = useParams();
  const url = `/${locale}${pathname}`;
  console.log(url === `/${locale}`);
  return <>{url === `/${locale}` ? <MobileHomeIndex /> : null}</>;
};

export default MobileNavbarIndexProvider;
