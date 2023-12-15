import { SmoothScrollLink } from '@/components/SmoothScrollToIdElement';
import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';

const HomeIndexMobile = () => {
  return (
    <>
      <MenubarSub>
        <MenubarSubTrigger>Wer sind wir?</MenubarSubTrigger>
        <MenubarSubContent>
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
        </MenubarSubContent>
      </MenubarSub>
    </>
  );
};

export default HomeIndexMobile;
