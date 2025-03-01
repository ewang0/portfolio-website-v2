'use client'

import StarBanner  from "./StarBanner"
import { useTheme } from "./theme/ThemeProvider"

const MobileInfopanel = () => {
    const { theme } = useTheme()

    return (
        <div className='flex flex-col z-10'>
            <div className="pb-4 border-neutral-700">
                <div className="w-screen px-5">
                    <StarBanner className="w-full h-full" color={theme === 'dark' ? '#404040' : '#ADADAD'} />
                </div>
            </div>
            <div className='flex gap-8 py-4 mx-5 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>ABOUT</h2>
                <div className="flex flex-col text-md gap-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 py-4 mx-5 border-y border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-col'>
                        <div className='font-medium'>Company 1</div>
                        <div className='dark:text-neutral-400'>Front End Engineer, 2021-2022</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-medium'>Company 1</div>
                        <div className='dark:text-neutral-400'>Front End Engineer, 2021-2022</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-medium'>Company 1</div>
                        <div className='dark:text-neutral-400'>Front End Engineer, 2021-2022</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileInfopanel