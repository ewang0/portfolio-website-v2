import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { inject } from '@vercel/analytics'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from './components/theme/ThemeProvider.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <ThemeProvider defaultTheme="dark" storageKey='vite-ui-theme'>
        <App />
      </ThemeProvider>
    </ParallaxProvider>
  </StrictMode>,
)

// Inject Vercel Analytics
inject()