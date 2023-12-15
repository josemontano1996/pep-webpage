'use client';

import { useParams, usePathname } from 'next/navigation';
import HomeIndexDesktop from './HomeIndexDesktop';
import ClimateIndexDesktop from './ClimateIndexDesktop';

const DesktopNavbarIndexProvider = () => {
  const pathname = usePathname().split('/')[2] || '';
  const { locale } = useParams();
  const url = `/${locale}/${pathname}`;

  return (
    <>
      {url === `/${locale}/` && <HomeIndexDesktop />}
      {url === `/${locale}/climate` && <ClimateIndexDesktop />}
    </>
  );
};

export default DesktopNavbarIndexProvider;
