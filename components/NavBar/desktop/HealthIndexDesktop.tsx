import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

const HealthIndexDesktop = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger>Index</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <SmoothScrollLink scrollToId="surgery">
            Rekonstruktive Chirurgie
          </SmoothScrollLink>
        </MenubarItem>
        <MenubarItem>
          <SmoothScrollLink scrollToId="oxigen">
            Sauerstoffeanlage
          </SmoothScrollLink>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default HealthIndexDesktop;
