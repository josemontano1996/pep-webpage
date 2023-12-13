import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import DesktopNavbarIndexProvider from './DesktopNavBarIndexProvider';
import { cn } from '@/lib/utils';
import LocaleLink from '@/components/LocaleLink';

const DesktopMenu = () => {
  return (
    <Menubar className={cn('hidden lg:flex')}>
      <DesktopNavbarIndexProvider />
      <MenubarMenu>
        <MenubarTrigger>Was machen wir?</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <LocaleLink path="/climate">Für die Umwelt</LocaleLink>
          </MenubarItem>
          <MenubarItem>
            <LocaleLink path="/health">Für die Gesundheit</LocaleLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Transparenz</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <a href="/pdf/freistellungsbescheid-2021.pdf" target="_blank">
              Gemeinnützigkeit
            </a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        
      </MenubarMenu>
    </Menubar>
  );
};

export default DesktopMenu;
