'use client';

import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../../ui/menubar';
import { useTranslation } from 'react-i18next';

const HomeIndexDesktop = () => {
  const { t } = useTranslation();
  return (
    <>
      <MenubarMenu>
        <MenubarTrigger>{t('uber-uns')}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <SmoothScrollLink scrollToId="about">
              {t('wer-sind-wir')}
            </SmoothScrollLink>
          </MenubarItem>
          <MenubarItem>
            <SmoothScrollLink scrollToId="goals">
              {t('was-bewegt-uns')}
            </SmoothScrollLink>
          </MenubarItem>
          <MenubarItem>
            <SmoothScrollLink scrollToId="projects">
              {t('was-machen-wir')}
            </SmoothScrollLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </>
  );
};

export default HomeIndexDesktop;
