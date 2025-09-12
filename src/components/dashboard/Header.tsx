'use client'

export function Header() {
  return (
    <header className="text-center relative">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-yellow rounded-lg blur-xl opacity-60 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-neon-purple via-neon-blue to-neon-yellow rounded-lg p-8 shadow-2xl">
            <h1 className="text-6xl font-black holographic-text mb-2 font-orbitron">
              🧠 Mistr Infiniti
            </h1>
            <p className="text-purple-900 font-bold text-lg">
              Advanced Multi-Agent Consciousness Platform - Beta Release
            </p>
            <div className="mt-4 flex justify-center space-x-4 text-sm">
              <span className="bg-black/50 px-3 py-1 rounded-full">
                🔬 12 AI Agents
              </span>
              <span className="bg-black/50 px-3 py-1 rounded-full">
                🔗 Neural Network
              </span>
              <span className="bg-black/50 px-3 py-1 rounded-full">
                ⚛️ Quantum Enhanced
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}