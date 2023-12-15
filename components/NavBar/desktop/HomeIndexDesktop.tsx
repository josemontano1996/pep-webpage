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
        <MenubarTrigger>Wer sind wir?</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <SmoothScrollLink scrollToId="about">Über uns</SmoothScrollLink>
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
