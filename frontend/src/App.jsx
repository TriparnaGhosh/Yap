import React from 'react'
import { Route, Routes } from 'react-router'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden'>
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#38bdf8_0%,transparent_55%)] opacity-20" />

      {/* Accent glow orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 opacity-20 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 opacity-20 blur-[140px] rounded-full" />


      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App