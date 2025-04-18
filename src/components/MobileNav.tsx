import { ModeToggle } from "./ModeToggle";
import ExternalLink from "./ExternalLink";

const MobileNav = () => {
  return (
    <div className="flex justify-between items-center mx-5 py-4 border-b border-neutral-700 z-20">
      <ExternalLink href="https://github.com/ewang0" text="Github" />
      <ModeToggle />
    </div>
  );
};

export default MobileNav;
