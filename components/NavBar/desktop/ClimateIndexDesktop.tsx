'use client';
import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/ui/menubar';
import { useTranslation } from 'react-i18next';

const ClimateIndexDesktop = () => {
  const { t } = useTranslation();
  return (
    <MenubarMenu>
      <MenubarTrigger>{t('index')}</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <SmoothScrollLink scrollToId="objectives">
            {t('ziele')}
          </SmoothScrollLink>
        </MenubarItem>
        <MenubarItem>
          <SmoothScrollLink scrollToId="advantajes">
            {t('positive-effects')}
          </SmoothScrollLink>
        </MenubarItem>
        <MenubarItem>
          <SmoothScrollLink scrollToId="planting">
            {t('anpflanzung')}
          </SmoothScrollLink>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default ClimateIndexDesktop;
