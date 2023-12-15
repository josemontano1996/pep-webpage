import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';

const HealtIndexMobile = () => {
  return (
    <MenubarSub>
      <MenubarSubTrigger>Index</MenubarSubTrigger>
      <MenubarSubContent>
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
      </MenubarSubContent>
    </MenubarSub>
  );
};

export default HealtIndexMobile;
