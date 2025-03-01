'use client'

import StarBanner  from "./StarBanner"
import ExternalLink from "./ExternalLink"

const MobileInfopanel = () => {
    return (
        <div className='flex flex-col z-10'>
            <div className="pb-4 border-neutral-700">
                <div className="w-screen px-5">
                    <StarBanner className="w-full h-full" color={"#404040"} />
                </div>
            </div>
            <div className='flex gap-8 py-4 mx-5 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>ABOUT</h2>
                <div className="flex flex-col text-md gap-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 py-4 mx-5 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 py-4 mx-5 border-y border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>CONTACT</h2>
                <div className='flex flex-col gap-2'>
                    <ExternalLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" text="Github" />
                    <ExternalLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" text="LinkedIn" />
                    <ExternalLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" text="CV" />
                </div>
            </div>
        </div>
    )
}

export default MobileInfopanel