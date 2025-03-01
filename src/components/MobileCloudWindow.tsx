'use client'

import { ParallaxBanner } from "react-scroll-parallax"
import { CloudWindow } from "./icons/CloudWindow"
import { useTheme } from "../components/theme/ThemeProvider"
import { useState, useEffect } from "react"

const MobileCloudWindow = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <img className="w-screen" src="/skeletons/window-skeleton.svg" alt="" height={1000} width={1000} />
  }

  return (
    <div className="relative flex justify-center">
        <div className="w-full h-full absolute z-10 md:w-auto md:h-auto">
            <CloudWindow color={theme === 'dark' ? '#090909' : 'white'} className="h-full w-full"/>
        </div>
        <ParallaxBanner
            layers={[{ image: '/clouds-background.jpg', speed: -15 }]}
            className="aspect-[393/345]"
        />
    </div>
  )
}

export default MobileCloudWindow