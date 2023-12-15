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

const MenuMobile = ({ locale }: { locale: string }) => {
  return (
    <Menubar className={cn('lg:hidden')}>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent className={cn('pl-[2vw]')}>
          <MobileNavbarIndexProvider />
          <MenubarSub>
            <MenubarSubTrigger>Was machen wir?</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem asChild>
                <Link href={`/${locale}/climate`}>Für die Umwelt</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href={`/${locale}/health`}>Für die Gesundheit</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Transparenz</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <a href="/pdf/freistellungsbescheid-2021.pdf" target="_blank">
                  Gemeinnützigkeit
                </a>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            {/* TODO:IMPLEMENT EMAIL SENDING DIALOG */}
            Kontakt
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
