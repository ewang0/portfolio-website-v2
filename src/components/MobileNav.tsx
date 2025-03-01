import { ModeToggle } from "./ModeToggle"
import ExternalLink from "./ExternalLink"

const MobileNav = () => {
  return (
    <div className='flex justify-between items-center mx-5 py-4 border-b border-neutral-700 z-10'>
        <ExternalLink href="mailto:info@twopixel.studio" text="Contact" />
        <ModeToggle />
    </div>
  )
}

export default MobileNav