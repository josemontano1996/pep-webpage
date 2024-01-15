import Link from 'next/link';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { cn } from '@/lib/utils';
import MobileNavbarIndexProvider from './MobileNavBarIndexProvider';
import LocaleSelector from '@/components/translations/LocaleSelector';
import { Menu } from 'lucide-react';
import ContactDialog from '@/components/ContactDialog';
import initTranslations from '@/lib/i18n';

const MenuMobile = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['shared']);
  return (
    <Menubar className={cn('lg:hidden')}>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent className={cn('pl-[2vw]')}>
          <MobileNavbarIndexProvider />
          <MenubarSub>
            <MenubarSubTrigger>{t('was-machen-wir')}</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link href={`/${locale}/climate`}>{t('r-2-1')}</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={`/${locale}/health`}>{t('r-2-2')}</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>{t('r-3-title')}</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <a href="/pdf/freistellungsbescheid-2021.pdf" target="_blank">
                  {t('r-3-1')}
                </a>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem asChild>
            <ContactDialog triggerStyle="text-sm pl-2 py-1" />
          </MenubarItem>
          <MenubarSub>
            <div className="flex flex-col items-center pt-2 sm:hidden">
              <LocaleSelector />
            </div>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuMobile;
