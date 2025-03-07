import React from 'react'
import '../App.css'
import { Badge } from './ui/badge'
interface GalleryProps {
    selectedImgUrl: string | undefined,
    skills: string[],
    link: string
}

const Gallery: React.FC<GalleryProps> = ({ selectedImgUrl, skills, link }) => {
  return (
    <div className='pb-5 md:grid grid-cols-1 w-full'>
      <a className='cursor-pointer' href={link} target="_blank" rel="noopener noreferrer">
        <div className='relative'>
          <div className='overlay absolute inset-0 z-0' />
            <img src={selectedImgUrl} className='w-full rounded-xs' alt='' draggable={false} />
        </div>
      </a>
      <div className='flex flex-wrap gap-2 mt-5'>
        {skills?.map((skill) => (
          <Badge key={skill} variant="secondary" className="bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white">{skill}</Badge>
        ))}
      </div>
    </div>
  )
}

export default Gallery