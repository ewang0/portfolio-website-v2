import ExternalLink from './ExternalLink'
import { ModeToggle } from './ModeToggle'
import '../App.css'
import { useTheme } from './theme/ThemeProvider'

const Footer = () => {
  const { theme } = useTheme()
  
  return (
    <>
      <div className='flex relative z-10 justify-center items-center md:border-t border-neutral-700 mx-5 sm:justify-between py-5'>
        <div className='flex items-center justify-between border-neutral-700 w-full'>
          <div className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : ''}`}>© 2025</div>
          <div className='flex items-center gap-4'>
            <ExternalLink href="https://github.com/ewang0" text="Github" />
            <ExternalLink href="https://github.com/ewang0" text="LinkedIn" />
            <ExternalLink href="https://github.com/ewang0" text="CV" />
            <div className='ml-4'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;