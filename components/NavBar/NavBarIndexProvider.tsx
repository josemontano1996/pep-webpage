'use client';

import { useParams, usePathname } from 'next/navigation';
import HomeNav from './HomeNav';

const NavBarIndexProvider = () => {
  const pathname = usePathname().split('/')[2] || '';
  const { locale } = useParams();
  const url = `/${locale}${pathname}`;
  console.log(url === `/${locale}`);
  return <>{url === `/${locale}` ? <HomeNav /> : null}</>;
};

export default NavBarIndexProvider;
