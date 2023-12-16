import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../../ui/menubar';

const HomeIndexDesktop = () => {
  return (
    <>
      <MenubarMenu>
        <MenubarTrigger>Über uns</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <SmoothScrollLink scrollToId="about">
              Wer sind wir?
            </SmoothScrollLink>
          </MenubarItem>
          <MenubarItem>
            <SmoothScrollLink scrollToId="goals">
              Was bewegt uns?
            </SmoothScrollLink>
          </MenubarItem>
          <MenubarItem>
            <SmoothScrollLink scrollToId="projects">
              Was machen wir?
            </SmoothScrollLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </>
  );
};

export default HomeIndexDesktop;
