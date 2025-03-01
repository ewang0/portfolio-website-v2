import Projects from './Projects'
import Gallery from './Gallery'
import { useState, useEffect } from 'react'
import {getProjects} from '../sanityHelpers.ts'
import { Project } from '../types'
import ExternalLink from './ExternalLink'
import { useTheme } from '../components/theme/ThemeProvider'
import '../App.css'

const ProjectViewer = () => {
    const [projectsArr, setProjectsArr] = useState<Project[]>([])
    const [selected, setSelected] = useState(0)
    const { theme } = useTheme()

    // get projects from Sanity
    useEffect(() => {
        getProjects().then(result => {
            setProjectsArr(result)
        })
    }, [])

    const handleProjectSelect = ( index:number ) => {
        setSelected(index)
    }

    return (
        <>
            <Projects projectsArr={projectsArr} selected={selected} handleProjectSelect={handleProjectSelect} />
            <div className="col-span-8 w-full overflow-y-auto lg:col-span-6">
                <div className={`hidden md:flex justify-between sticky top-0 p-5 z-10 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
                    <div className='overlay absolute top-0 left-0 w-full h-full' />
                    <h2 className={`font-bold dark:text-neutral-400`}>PROJECT DETAIL</h2>
                    <ExternalLink href="https://github.com/ewang0" text="Code" />
                </div>
                <div className='hidden md:block pb-5 px-5'>
                    <Gallery selectedImgUrl={projectsArr[selected]?.image.asset.url} skills={projectsArr[selected]?.skills} />
                </div>
            </div>
        </>
    )
}

export default ProjectViewer