import './App.css'
import Infopanel from './components/Infopanel'
import Headline from './components/Headline'
import ProjectViewer from './components/ProjectViewer'
import Slider from './components/Slider'
import Footer from './components/Footer'
import MobileCloudWindow from './components/MobileCloudWindow'
import MobileInfoPanel from './components/MobileInfopanel'
import MobileNav from './components/MobileNav'

function App() {

  return (
    <main className='h-full md:h-screen flex flex-col relative'>
      <div className='overlay absolute inset-0 z-0 w-full h-full' />
      <Slider />
      <Headline />
      <div className="hidden md:grid grid-cols-12 overflow-y-hidden grow z-10">
        <Infopanel />
        <ProjectViewer />
      </div>
      <div className='flex flex-col md:hidden'>
        <MobileNav />
        <MobileCloudWindow />
        <ProjectViewer />
        <MobileInfoPanel />
      </div>
      <Footer />
    </main>
  )
}

export default App
