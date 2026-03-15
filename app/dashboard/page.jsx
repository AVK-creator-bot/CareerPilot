'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        window.location.href = '/login'
      } else {
        setUser(session.user)
      }
      setLoading(false)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (loading) return (
    <main className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      <div className="text-white/50 text-sm">Loading...</div>
    </main>
  )

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <div className="font-bold text-xl">Career<span className="text-[#FF2D8A]">Pilot</span></div>
        <div className="flex items-center gap-6">
          <span className="text-white/40 text-sm">{user?.email}</span>
          <button onClick={handleLogout} className="text-sm text-white/40 hover:text-white transition-colors">Log out</button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-10">
        <div className="mb-8">
          <p className="text-white/40 text-sm mb-1">Good morning 👋</p>
          <h1 className="text-3xl font-bold">Your Career Hub</h1>
        </div>

        <div className="bg-gradient-to-r from-[#7A3CFF]/20 to-[#FF2D8A]/10 border border-[#7A3CFF]/25 rounded-2xl p-6 mb-6">
          <div className="text-white/50 text-sm mb-2">Career Readiness Score</div>
          <div className="flex items-end justify-between mb-4">
            <div className="text-6xl font-bold bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] bg-clip-text text-transparent">42%</div>
            <div className="text-right">
              <div className="text-white font-medium">Product Manager</div>
              <div className="text-white/40 text-sm">Keep training daily</div>
            </div>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[42%] bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-white/40 text-sm mb-1">Missions Done</div>
            <div className="text-4xl font-bold text-[#FF2D8A]">0</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-white/40 text-sm mb-1">Day Streak</div>
            <div className="text-4xl font-bold text-[#7A3CFF]">0 🔥</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs uppercase tracking-widest text-white/40 mb-3">Skill Progress</div>
          {[
            { name: 'Product Thinking', pct: 20 },
            { name: 'Data Analysis', pct: 10 },
            { name: 'Communication', pct: 15 },
            { name: 'AI Literacy', pct: 5 },
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 mb-3">
              <span className="text-sm text-white/70 w-36">{skill.name}</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7A3CFF] to-[#2F8CFF] rounded-full" style={{width: `${skill.pct}%`}}></div>
              </div>
              <span className="text-xs text-white/40 w-8 text-right">{skill.pct}%</span>
            </div>
          ))}
        </div>

        <div className="text-xs uppercase tracking-widest text-white/40 mb-3">Today's Mission</div>
        <a href="/mission" className="block bg-white/5 border border-white/10 hover:border-[#FF2D8A]/30 rounded-2xl p-6 transition-colors cursor-pointer">
          <div className="inline-block text-xs uppercase tracking-widest text-[#FF2D8A] bg-[#FF2D8A]/10 border border-[#FF2D8A]/20 px-3 py-1 rounded-full mb-3">Product Thinking</div>
          <div className="text-xl font-bold mb-2">Diagnose a broken checkout flow</div>
          <div className="text-white/40 text-sm mb-4">Users are abandoning the cart at step 3. Analyze the friction and propose one high-impact fix.</div>
          <div className="flex justify-between items-center">
            <span className="text-white/30 text-xs">⏱ 5 min · +40 XP</span>
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] rounded-full flex items-center justify-center text-sm">→</div>
          </div>
        </a>
      </div>
    </main>
  )
}