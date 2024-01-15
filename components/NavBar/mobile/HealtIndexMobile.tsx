'use client';
import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { useTranslation } from 'react-i18next';

const HealtIndexMobile = () => {
  const { t } = useTranslation();
  return (
    <MenubarSub>
      <MenubarSubTrigger>{t('index')}</MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>
          <SmoothScrollLink scrollToId="surgery">
            {t('chirurgie')}
          </SmoothScrollLink>
        </MenubarItem>
        <MenubarItem>
          <SmoothScrollLink scrollToId="oxigen">{t('oxigen')}</SmoothScrollLink>
        </MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
  );
};

export default HealtIndexMobile;
