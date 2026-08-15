import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AnimationModeProvider } from '@/context/AnimationModeContext'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { GlobalBackground } from '@/components/layout/GlobalBackground'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { SkillConstellation } from '@/components/sections/SkillConstellation'
import { Projects } from '@/components/sections/Projects'
import { Achievements } from '@/components/sections/Achievements'
import { LeetCode } from '@/components/sections/LeetCode'
import { Contact } from '@/components/sections/Contact'

import '@/styles.css'

function App() {
  return (
    <AnimationModeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <a href="#home" className="skip-link">Skip to content</a>
        <GlobalBackground />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <SkillConstellation />
          <Projects />
          <Achievements />
          <LeetCode />
          <Contact />
        </main>
      </div>
    </AnimationModeProvider>
  )
}

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
