import { Menu } from 'lucide-react';

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
import LocaleLink from '@/components/LocaleLink';
import LocaleSelector from '@/components/translations/LocaleSelector';

const MobileMenu = () => {
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
              <MenubarItem>
                <LocaleLink path="/climate">Für die Umwelt</LocaleLink>
              </MenubarItem>
              <MenubarItem>
                <LocaleLink path="/health">Für die Gesundheit</LocaleLink>
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

export default MobileMenu;
