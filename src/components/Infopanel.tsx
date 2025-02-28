import MobileCloudWindow from './MobileCloudWindow'

const Infopanel = () => {
  return (
    <div className='hidden lg:flex flex-col border-r border-neutral-700 col-span-2 overflow-y-auto text-pretty'>
        <MobileCloudWindow />
        <div className='flex flex-col gap-4 px-5 py-5 border-b border-neutral-700'>
            <h2 className={`font-bold dark:text-neutral-400`}>ABOUT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='px-5 py-5 border-neutral-700'>
            <h2 className={` font-bold mb-4 dark:text-neutral-400`}>EXPERIENCE</h2>
            <p>Company 1</p>
            <p>Company 2</p>
            <p>Company 3</p>
        </div>
    </div>
  )
}

export default Infopanel