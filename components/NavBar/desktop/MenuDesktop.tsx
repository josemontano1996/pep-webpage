import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import DesktopNavbarIndexProvider from './DesktopNavBarIndexProvider';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import initTranslations from '@/lib/i18n';

const MenuDesktop = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['shared']);
  return (
    <Menubar className={cn('hidden lg:flex')}>
      <DesktopNavbarIndexProvider />
      <MenubarMenu>
        <MenubarTrigger>{t('r-2-title')}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href={`/${locale}/climate`}>{t('r-2-1')}</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href={`/${locale}/health`}>{t('r-2-2')}</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t('r-3-title')}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <a href="/pdf/freistellungsbescheid-2021.pdf" target="_blank">
              {t('r-3-1')}
            </a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

    </Menubar>
  );
};

export default MenuDesktop;
