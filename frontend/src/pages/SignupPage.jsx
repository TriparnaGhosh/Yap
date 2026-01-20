import React, { useState } from 'react'
import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useAuthStore } from '../store/useAuthStore';

const SignupPage = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  }

  return (
    <div className='w-full flex items-center justify-center p-4 bg-slate-900'>
      <div className='relative w-full max-w-6xl md:h-[800px] h-[650px]'>
        <BorderAnimatedContainer>
          <div className='w-full flex flex-col md:flex-row'>
            {/* From column - Left Side */}
            <div className='md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30'>
              <div className='w-full max-w-md'>
                {/* Heading */}
                <div className='text-center mb-8'>
                  <MessageCircleIcon className='w-12 h-12 mx-auto text-slate-400 mb-4' />
                  <h2 className='text-2xl font-bold text-slate-200 mb-2'>Create Account</h2>
                  <p className='text-slate-400'>Sign up for a new account</p>
                </div>

                {/* Form */}
                <form action="" onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label htmlFor="fullName" className="auth-input-label">Full Name</label>
                    <div className='relative'>
                      <UserIcon className='auth-input-icon' />

                      <input
                        type="text"
                        id="fullName"
                        placeholder="John Doe"
                        className="input"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="auth-input-label">Email</label>
                    <div className='relative'>
                      <MailIcon className='auth-input-icon' />

                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="auth-input-label">Password</label>
                    <div className='relative'>
                      <LockIcon className='auth-input-icon' />

                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="input"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button className='auth-btn' type="submit" disabled={isSigningUp}>
                    {isSigningUp ? (
                      <span className='flex items-center justify-center'>
                        <LoaderIcon className='w-full h-5 animate-spin text-center' />
                      </span>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className='text-center mt-6'>
                  <Link to="/login" className="auth-link">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Decorative */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/signup.png"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">Start Your Journey Today</h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  )
}

export default SignupPage