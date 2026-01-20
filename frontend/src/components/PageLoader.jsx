import React from 'react'
import { LoaderIcon } from 'lucide-react'


const PageLoader = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-slate-900'>
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#38bdf8_0%,transparent_55%)] opacity-20" />

      {/* Accent glow orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 opacity-20 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 opacity-20 blur-[140px] rounded-full" />
      
      <LoaderIcon className="size-10 animate-spin" />
    </div>
  )
}

export default PageLoader