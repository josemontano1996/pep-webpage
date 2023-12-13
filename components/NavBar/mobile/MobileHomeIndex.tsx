import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';

const MobileHomeIndex = () => {
  return (
    <>
      <MenubarSub>
        <MenubarSubTrigger>Wer sind wir?</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>
            <a href="#about">Über uns</a>
          </MenubarItem>
          <MenubarItem>
            <a href="#goals">Was bewegt uns?</a>
          </MenubarItem>
          <MenubarItem>
            <a href="#projects">Was machen wir?</a>
          </MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </>
  );
};

export default MobileHomeIndex;
