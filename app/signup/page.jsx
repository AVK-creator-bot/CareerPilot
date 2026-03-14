'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Account created! Check your email to confirm.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Join <span className="bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] bg-clip-text text-transparent">CareerPilot</span>
          </h1>
          <p className="text-white/50">Start your career training today</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="mb-4">
            <label className="text-sm text-white/50 mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#7A3CFF] transition-colors"
            />
          </div>
          <div className="mb-6">
            <label className="text-sm text-white/50 mb-2 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#7A3CFF] transition-colors"
            />
          </div>
          {message && (
            <div className="mb-4 text-sm text-center text-[#FF2D8A]">{message}</div>
          )}
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
          <p className="text-center text-white/40 text-sm mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-[#7A3CFF] hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </main>
  )
}