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

const MenuDesktop = ({ locale }: { locale: string }) => {
  return (
    <Menubar className={cn('hidden lg:flex')}>
      <DesktopNavbarIndexProvider />
      <MenubarMenu>
        <MenubarTrigger>Was machen wir?</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href={`/${locale}/climate`}>Für die Umwelt</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href={`/${locale}/health`}>Für die Gesundheit</Link>
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
      <MenubarMenu></MenubarMenu>
    </Menubar>
  );
};

export default MenuDesktop;
