'use client';

import MobileMenu from './mobile/MobileMenu';
import DesktopMenu from './desktop/DesktopMenu';

export default function LeftNav() {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}
