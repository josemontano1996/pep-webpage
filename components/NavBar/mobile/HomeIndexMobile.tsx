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
        <MenubarSubTrigger>Über uns</MenubarSubTrigger>
        <MenubarSubContent>
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
        </MenubarSubContent>
      </MenubarSub>
    </>
  );
};

export default HomeIndexMobile;
