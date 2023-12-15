import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';

const ClimateIndexMobile = () => {
  return (
    <>
      <MenubarSub>
        <MenubarSubTrigger>Index</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>
            <SmoothScrollLink scrollToId="objectives">Ziele</SmoothScrollLink>
          </MenubarItem>
          <MenubarItem>
            <SmoothScrollLink scrollToId="advantajes">
              Projektvorteile
            </SmoothScrollLink>
          </MenubarItem>
          <MenubarItem>
            <SmoothScrollLink scrollToId="planting">
              Anpflanzung
            </SmoothScrollLink>
          </MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </>
  );
};

export default ClimateIndexMobile;
