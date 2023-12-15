import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import { MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar';


const ClimateIndexDesktop = () => {
  return (
    <>
      <MenubarMenu>
        <MenubarTrigger>Index</MenubarTrigger>
        <MenubarContent>
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
        </MenubarContent>
      </MenubarMenu>
    </>
  );
}

export default ClimateIndexDesktop