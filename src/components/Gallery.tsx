import React from 'react'
import '../App.css'

interface GalleryProps {
    selectedImgUrl: string | undefined,
    skills: string[]
}

const Gallery: React.FC<GalleryProps> = ({ selectedImgUrl, skills }) => {
  return (
    <div className='pb-5 md:grid grid-cols-1 w-full'>
      <div className='relative'>
        <div className='overlay absolute inset-0 z-0' />
        <img src={selectedImgUrl} className='w-full' alt='' draggable={false} />
      </div>
      <div className='flex flex-wrap gap-2 mt-5'>
        {skills?.map((skill) => (
          <div key={skill} className="border border-neutral-700 px-3 rounded-full">{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default Gallery