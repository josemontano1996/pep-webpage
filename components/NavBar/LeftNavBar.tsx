'use client';

import MenuDesktop from './desktop/MenuDesktop';
import MobileMenu from './mobile/MenuMobile';


export default function LeftNav({ locale }: { locale: string }) {
  return (
    <>
      <MenuDesktop locale={locale} />
      <MobileMenu locale={locale} />
    </>
  );
}
