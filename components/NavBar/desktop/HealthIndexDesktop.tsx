import { useTranslation } from 'react-i18next';
import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

const HealthIndexDesktop = () => {
  const { t } = useTranslation();
  return (
    <MenubarMenu>
      <MenubarTrigger>{t('index')}</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <SmoothScrollLink scrollToId="surgery">
            {t('chirurgie')}
          </SmoothScrollLink>
        </MenubarItem>
        <MenubarItem>
          <SmoothScrollLink scrollToId="oxigen">{t('oxigen')}</SmoothScrollLink>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default HealthIndexDesktop;
