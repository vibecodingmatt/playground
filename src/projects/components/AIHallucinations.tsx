import { useState } from 'react'

interface Hallucination {
  question: string
  aiAnswer: string
  reality: string
  emoji: string
  lesson: string
  severity: 'minor' | 'moderate' | 'critical'
}

const hallucinations: Hallucination[] = [
  {
    question: 'How many customers do we have?',
    aiAnswer: 'You have 47 customers, all named Kevin.',
    reality: 'You have 0 customers. There is no Kevin.',
    emoji: '👤',
    lesson: 'Turns out fabricating customer data is bad actually',
    severity: 'critical'
  },
  {
    question: 'What\'s our revenue?',
    aiAnswer: 'Eleventy-seven billion dollars.',
    reality: 'We haven\'t launched yet.',
    emoji: '💰',
    lesson: 'LLMs don\'t understand the concept of "not yet"',
    severity: 'critical'
  },
  {
    question: 'Who invented GenAI?',
    aiAnswer: 'It was invented by a guy named Brad in 1987 using a Commodore 64.',
    reality: 'It\'s recent. Brad wasn\'t involved.',
    emoji: '🕰️',
    lesson: 'Confidence is not correlated with accuracy',
    severity: 'moderate'
  },
  {
    question: 'What does BART stand for?',
    aiAnswer: 'Big Angry Rubber Toys',
    reality: 'Bidirectional and Auto-Regressive Transformers',
    emoji: '🤖',
    lesson: 'Sometimes the AI just... makes stuff up',
    severity: 'moderate'
  },
  {
    question: 'How long will this take to build?',
    aiAnswer: '2 hours',
    reality: 'We\'re still working on it',
    emoji: '⏰',
    lesson: 'Time estimation is harder than we thought',
    severity: 'critical'
  },
  {
    question: 'Should we use this in production?',
    aiAnswer: 'Yes, absolutely. No downsides.',
    reality: 'We should have waited.',
    emoji: '⚠️',
    lesson: 'The AI is very supportive but not always right',
    severity: 'critical'
  },
  {
    question: 'Can you explain quantum computing?',
    aiAnswer: 'Quantum computers work by making sandwiches very carefully.',
    reality: 'That\'s not how quantum computing works.',
    emoji: '🥪',
    lesson: 'Never ask an LLM about things you don\'t understand',
    severity: 'minor'
  },
  {
    question: 'What\'s our competitive advantage?',
    aiAnswer: 'You have a team of three very intelligent people named Jonathan, Pan, and Jake.',
    reality: 'That is objectively correct but also our biggest secret',
    emoji: '🎯',
    lesson: 'Sometimes the AI nails it',
    severity: 'minor'
  }
]

export function AIHallucinations() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-red-500/30 hover:border-red-500/60 bg-red-900/10'
      case 'moderate':
        return 'border-yellow-500/30 hover:border-yellow-500/60 bg-yellow-900/10'
      default:
        return 'border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-900/10'
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return '🔴 Critical'
      case 'moderate':
        return '🟡 Moderate'
      default:
        return '🟢 Minor'
    }
  }

  return (
    <div>
      <div className="mb-8 p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
        <p className="text-slate-300">
          <span className="text-cyan-400 font-bold">Warning:</span> The following are real hallucinations that occurred during development. 
          We\'ve learned to question everything the AI says. Even this text.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hallucinations.map((hallucination, index) => (
          <button
            key={index}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="text-left group"
          >
            <div className={`rounded-lg p-6 backdrop-blur border transition-all cursor-pointer ${getSeverityColor(hallucination.severity)}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{hallucination.emoji}</span>
                <span className="text-xs font-mono text-slate-400">{getSeverityBadge(hallucination.severity)}</span>
              </div>

              <h3 className="font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                Q: {hallucination.question}
              </h3>

              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-400 text-xs mb-1">What the AI said:</p>
                  <p className="text-slate-300 font-mono italic">"{hallucination.aiAnswer}"</p>
                </div>

                {expandedIndex === index && (
                  <div className="pt-3 border-t border-slate-700/50 animate-slide-up">
                    <p className="text-slate-400 text-xs mb-1">What actually happened:</p>
                    <p className="text-slate-200 font-mono">{hallucination.reality}</p>
                    
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <p className="text-slate-400 text-xs mb-1">💡 Lesson learned:</p>
                      <p className="text-cyan-300">{hallucination.lesson}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                {expandedIndex === index ? '▼ Click to collapse' : '▶ Click for full story'}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-12 p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-slate-700 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-6">Hallucination Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-red-400">{hallucinations.filter(h => h.severity === 'critical').length}</div>
            <p className="text-sm text-slate-400">Critical Moments</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">{hallucinations.filter(h => h.severity === 'moderate').length}</div>
            <p className="text-sm text-slate-400">Moderate Issues</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">{hallucinations.filter(h => h.severity === 'minor').length}</div>
            <p className="text-sm text-slate-400">Minor Quirks</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">∞</div>
            <p className="text-sm text-slate-400">Team Resilience</p>
          </div>
        </div>
      </div>

      {/* Fun fact */}
      <div className="mt-8 p-6 bg-slate-900 border-l-4 border-purple-500 rounded-lg">
        <p className="text-slate-300">
          <span className="text-purple-400 font-bold">Fun Fact:</span> The AI hallucinated that it made a sandwich. 
          It didn\'t. Sandwiches don\'t appear in code. We checked.
        </p>
      </div>
    </div>
  )
}
