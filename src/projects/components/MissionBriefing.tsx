interface MissionBriefingProps {
  onClose: () => void
}

export function MissionBriefing({ onClose }: MissionBriefingProps) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900/95 to-purple-900/95 border-2 border-pink-500/50 rounded-lg p-8 backdrop-blur-md max-w-4xl mx-auto animate-slide-up">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 text-2xl transition-colors"
      >
        ✕
      </button>

      {/* Security stamp */}
      <div className="absolute top-4 left-4 text-pink-400 font-bold text-sm tracking-widest opacity-50">
        CLASSIFIED
      </div>

      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📞</div>
        <h2 className="text-3xl font-bold text-white mb-2">Marty's Mission Briefing</h2>
        <p className="text-pink-300 italic">Direct from the Angels' manager</p>
      </div>

      {/* Marty's message */}
      <div className="bg-slate-800/50 border-l-4 border-pink-500 pl-6 py-4 mb-8">
        <p className="text-slate-200 text-lg leading-relaxed mb-4">
          <span className="text-pink-400 font-bold">"Angels,"</span> Marty's voice crackles over the secure line, 
          <span className="text-purple-300"> "I have a new case for you. A Fortune 50 company stands at the precipice of AI transformation. They need generative AI integrated into their core business operations. Customer-facing. High stakes. No room for error."</span>
        </p>

        <p className="text-slate-300 italic mb-4">
          The room falls silent. The Angels know what this means.
        </p>

        <p className="text-slate-200 text-lg leading-relaxed">
          <span className="text-pink-400 font-bold">"Jonathan,"</span> Marty continues, 
          <span className="text-cyan-300"> "you're the brain. Design systems that don't just work—systems that scale to infinity. Your architecture is our foundation."</span>
        </p>

        <p className="text-slate-200 text-lg leading-relaxed mt-4 mb-4">
          <span className="text-pink-400 font-bold">"Pan,"</span> 
          <span className="text-purple-300"> "you're our designer. Make it beautiful. Make it intuitive. Make users forget they're talking to AI. Your UI is our shield."</span>
        </p>

        <p className="text-slate-200 text-lg leading-relaxed mb-4">
          <span className="text-pink-400 font-bold">"Jake,"</span> 
          <span className="text-blue-300"> "you're the glue. You build the infrastructure that holds us together. Deployments, integrations, DevOps magic—you're the pioneer that makes it all possible."</span>
        </p>

        <p className="text-slate-300 italic mt-6">
          A pause. Heavy with expectation.
        </p>

        <p className="text-slate-200 text-lg leading-relaxed mt-4">
          <span className="text-pink-400 font-bold">"Your mission: Transform generative AI from laboratory concept to production powerhouse. You have 12 weeks. You have my trust. You have each other."</span>
        </p>

        <p className="text-slate-300 italic mt-4">
          <span className="text-pink-400 font-bold">"This message will self-destruct in 5 seconds."</span> (It won't. But it sounds cooler that way.)
        </p>
      </div>

      {/* Mission objectives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded p-4">
          <h3 className="text-cyan-300 font-bold mb-2">🧠 JONATHAN: The Brain</h3>
          <p className="text-slate-300 text-sm">Architecture, scalability, system design. Jonathan ensures every decision is built on solid ground.</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded p-4">
          <h3 className="text-purple-300 font-bold mb-2">🎨 PAN: The Designer</h3>
          <p className="text-slate-300 text-sm">UI/UX, visual design, user experience. Pan makes the complex feel simple and the future feel beautiful.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded p-4">
          <h3 className="text-blue-300 font-bold mb-2">🔧 JAKE: The Glue</h3>
          <p className="text-slate-300 text-sm">Infrastructure, DevOps, deployment. Jake makes sure the Angels' brilliant ideas actually reach production.</p>
        </div>
      </div>

      {/* Mission Status */}
      <div className="bg-slate-800/50 border border-slate-700 rounded p-4 text-center">
        <p className="text-pink-400 font-mono text-sm mb-2">MISSION STATUS: ACTIVE</p>
        <p className="text-slate-300">The Angels are ready. Marty believes in them. Destiny awaits.</p>
      </div>

      {/* Closing */}
      <div className="mt-6 text-center">
        <p className="text-slate-400 italic">Remember: When Marty sends you on a mission, you deliver. No exceptions.</p>
      </div>
    </div>
  )
}
