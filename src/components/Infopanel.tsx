import MobileCloudWindow from './MobileCloudWindow'

const Infopanel = () => {
  return (
    <div className='hidden lg:flex flex-col relative col-span-2 overflow-y-auto text-pretty'>
        <MobileCloudWindow />
        <div className='flex flex-col gap-4 px-5 py-5 border-neutral-700'>
            <h2 className={`font-bold dark:text-neutral-400`}>ABOUT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='py-5 mx-5 border-t border-neutral-700'>
          <h2 className={`font-bold mb-5 dark:text-neutral-400`}>EXPERIENCE</h2>
          <div className='flex flex-col gap-4 w-full'>
              <div className='flex flex-col'>
                  <div className='font-medium'>Company 1</div>
                  <div className='dark:text-neutral-400 text-base'>Front End Engineer, 2021-2022</div>
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

export default Infopanel