'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useTranslation } from 'react-i18next';

export default function HeaderLeftNav() {
  const { t } = useTranslation();
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger> {t('left-nav-title-1')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>{t('left-nav-subtitle-1-1')}</MenubarItem>
            <MenubarItem>{t('left-nav-subtitle-1-2')}</MenubarItem>
           {/*  <MenubarItem>{t('left-nav-subtitle-1-3')}</MenubarItem> */}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger> {t('left-nav-title-2')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>{t('left-nav-subtitle-2-1')}</MenubarItem>
            <MenubarItem>{t('left-nav-subtitle-2-2')}</MenubarItem>
            <MenubarItem>{t('left-nav-subtitle-2-3')}</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger> {t('left-nav-title-3')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>{t('left-nav-subtitle-3-1')}</MenubarItem>
            <MenubarItem>{t('left-nav-subtitle-3-2')}</MenubarItem>
            <MenubarItem>{t('left-nav-subtitle-3-3')}</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
