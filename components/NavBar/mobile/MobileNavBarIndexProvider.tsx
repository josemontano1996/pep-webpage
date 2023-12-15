'use client';

import { useParams, usePathname } from 'next/navigation';

import HomeIndexMobile from './HomeIndexMobile';
import ClimateIndexMobile from './ClimateIndexMobile';

const MobileNavbarIndexProvider = () => {
  const pathname = usePathname().split('/')[2] || '';
  const { locale } = useParams();
  const url = `/${locale}/${pathname}`;

  return (
    <>
      {url === `/${locale}/` && <HomeIndexMobile />}
      {url === `/${locale}/climate` && <ClimateIndexMobile />}
    </>
  );
};

export default MobileNavbarIndexProvider;
