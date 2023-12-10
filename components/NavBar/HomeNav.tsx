import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../ui/menubar';
import { useTranslation } from 'react-i18next';

const HomeNav = () => {
  const { t } = useTranslation();
  return (
    <>
      <MenubarMenu>
        <MenubarTrigger> {t('left-nav-title-1')}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>{t('left-nav-subtitle-1-1')}</MenubarItem>
          <MenubarItem>{t('left-nav-subtitle-1-2')}</MenubarItem>
          <MenubarItem>{/* {t('left-nav-subtitle-1-3')} */}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </>
  );
};

export default HomeNav;
