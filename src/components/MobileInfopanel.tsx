'use client'

import StarBanner  from "./StarBanner"
import ExternalLink from "./ExternalLink"

const MobileInfopanel = () => {
    return (
        <div className='flex flex-col z-10'>
            <div className='flex gap-8 p-4 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>ABOUT</h2>
                <div className="flex flex-col text-md gap-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 p-4 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 p-4 border-y border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className='flex flex-col gap-2'>
                    <ExternalLink href="mailto:info@twopixel.studio" text="info@twopixel.studio" />
                    <ExternalLink href="https://www.linkedin.com/company/twopixel-studio/" text="LinkedIn" />
                    <ExternalLink href="https://www.instagram.com/twopixelstudio/" text="Instagram" />
                </div>
            </div>
            <div className="py-4 border-b border-neutral-700">
                <div className="w-screen">
                    <StarBanner className="w-full h-full" color={"#404040"} />
                </div>
            </div>
        </div>
    )
}

export default MobileInfopanel