import ExternalLink from './ExternalLink'
import { ModeToggle } from './ModeToggle'

const Footer = () => {
  return (
    <div className='flex z-10 justify-center items-center md:border-y border-neutral-700 px-4 py-8 sm:justify-between sm:px-5 sm:py-8'>
      <div className='flex items-center justify-between border-neutral-700 w-full'>
        <div>© 2025</div>
        <div className='flex items-center gap-4'>
          <ExternalLink href="https://github.com/ewang0" text="Github" />
          <ExternalLink href="https://github.com/ewang0" text="LinkedIn" />
          <ExternalLink href="https://github.com/ewang0" text="CV" />
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;