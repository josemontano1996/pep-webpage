'use client';

import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { useTranslation } from 'react-i18next';

const HomeIndexMobile = () => {
  const { t } = useTranslation();
  return (
    <>
      <MenubarSub>
        <MenubarSubTrigger>{t('uber-uns')}</MenubarSubTrigger>
        <MenubarSubContent>
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
        </MenubarSubContent>
      </MenubarSub>
    </>
  );
};

export default HomeIndexMobile;
