export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="inline-block text-xs tracking-widest uppercase text-[#FF2D8A] border border-[#FF2D8A]/30 px-4 py-1 rounded-full mb-8">
          AI Career Training
        </div>
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Train for the career
          <span className="block bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] bg-clip-text text-transparent">
            you want
          </span>
        </h1>
        <p className="text-lg text-white/50 mb-10 leading-relaxed">
          5 minutes a day. Real work simulations. AI-powered feedback. Get career-ready faster than you think.
        </p>
        <button className="bg-gradient-to-r from-[#FF2D8A] to-[#7A3CFF] text-white px-10 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
          Start Your Career Training →
        </button>
        <div className="flex justify-center gap-16 mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold">12K+</div>
            <div className="text-sm text-white/40 mt-1">Active trainees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">94%</div>
            <div className="text-sm text-white/40 mt-1">Skill improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">200+</div>
            <div className="text-sm text-white/40 mt-1">Career paths</div>
          </div>
        </div>
      </div>
    </main>
  )
}