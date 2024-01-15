'use client';
import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import { useTranslation } from 'react-i18next';

const ClimateIndexMobile = () => {
  const { t } = useTranslation();
  return (
    <>
      <MenubarSub>
        <MenubarSubTrigger>{t('index')}</MenubarSubTrigger>
        <MenubarSubContent>
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
        </MenubarSubContent>
      </MenubarSub>
    </>
  );
};

export default ClimateIndexMobile;
