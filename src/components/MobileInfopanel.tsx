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
                <p className='text-pretty'>Formerly an engineer at Amazon and Lippincott. Currently doing freelance work and building cool things with AI.</p>
                </div>
            </div>
            <div className='flex gap-8 py-4 mx-5 border-y border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-col'>
                        <div className='font-medium'>Amazon</div>
                        <div className='dark:text-neutral-400 text-balance'>Front End Engineer, 2022 - 2023</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-medium'>Lippincott</div>
                        <div className='dark:text-neutral-400 text-balance'>Design Technologist, 2023 - 2024</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-medium'>Freelance</div>
                        <div className='dark:text-neutral-400 text-balance'>Full Stack Engineer, 2024 - Present</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileInfopanel