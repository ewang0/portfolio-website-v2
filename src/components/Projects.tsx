import React from 'react'
import { Project } from '../types'
import '../App.css'
import { useTheme } from '../components/theme/ThemeProvider'
import StarIcon from './icons/StarIcon'
interface ProjectsProps {
    projectsArr: Project[],
    selected: number,
    handleProjectSelect: (index:number) => void
}
import Gallery from './Gallery'

const Projects: React.FC<ProjectsProps> = ( { projectsArr, selected, handleProjectSelect  }) => {
    const { theme } = useTheme()

    const description = (
        <div className='text-left pb-5'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
    )

    return (
        <div className='w-full h-full col-span-4 mt-5 border-x border-neutral-700 overflow-y-auto z-10'>
            <div className="flex flex-col">
                <div className={`sticky top-0 px-5 pb-5 z-10 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
                    <div className='overlay absolute top-0 left-0 w-full h-full' />
                    <h2 className={`font-bold dark:text-neutral-400`}>PROJECTS</h2>
                </div>
                <div className="px-5 pb-5">
                    {projectsArr?.map((project, index) => {
                        return (
                            <button
                                key={project.name}
                                className={`w-full border-b ${index === 0 ? 'border-t' : ''} border-neutral-700 text-lg flex flex-col cursor-pointer`}
                                onClick={() => handleProjectSelect(index)}
                            >
                                <div className='w-full flex gap-4 justify-between items-center'>
                                    <div className="flex gap-4 items-center">
                                        {index === selected && <StarIcon />}
                                        <div className={`${index === selected && "underline"} py-6 text-2xl font-bold text-left`}>{project.name}</div>
                                    </div>
                                    <div className="border border-neutral-700 px-3 rounded-full">{project.year}</div>
                                </div>
                                {index === selected && description}
                                <div className='md:hidden'>
                                    {index === selected && <Gallery selectedImgUrl={project.image.asset.url} skills={project.skills} />}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects