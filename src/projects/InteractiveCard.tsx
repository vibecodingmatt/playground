import { useState } from 'react'

interface CardState {
  hover: boolean
  scale: number
}

const cardExamples = [
  {
    id: 1,
    title: 'Floating Card',
    description: 'Card that lifts on hover with shadow effect',
    icon: '🎈',
  },
  {
    id: 2,
    title: 'Gradient Edge',
    description: 'Interactive card with gradient border',
    icon: '✨',
  },
  {
    id: 3,
    title: 'Shimmer Effect',
    description: 'Shimmering animation on card hover',
    icon: '💫',
  },
]

export default function InteractiveCardDemo() {
  const [cardStates, setCardStates] = useState<Record<number, CardState>>({
    1: { hover: false, scale: 1 },
    2: { hover: false, scale: 1 },
    3: { hover: false, scale: 1 },
  })

  const handleCardHover = (id: number, hovering: boolean) => {
    setCardStates(prev => ({
      ...prev,
      [id]: { ...prev[id], hover: hovering, scale: hovering ? 1.05 : 1 },
    }))
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Interactive Cards</h1>
        <p className="text-slate-600 mb-12">
          Explore interactive card designs and hover effects
        </p>

        <div className="space-y-8">
          {/* Floating Card Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Floating Card Effect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cardExamples.map(example => (
                <div
                  key={example.id}
                  onMouseEnter={() => handleCardHover(example.id, true)}
                  onMouseLeave={() => handleCardHover(example.id, false)}
                  style={{
                    transform: `scale(${cardStates[example.id].scale})`,
                  }}
                  className={`bg-white rounded-lg p-6 transition-all duration-300 cursor-pointer ${
                    cardStates[example.id].hover
                      ? 'shadow-2xl'
                      : 'shadow-lg'
                  }`}
                >
                  <div className="text-4xl mb-3">{example.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{example.title}</h3>
                  <p className="text-slate-600 text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Border Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Gradient Border Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Feature {i}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Hover over this card to see the gradient border effect in action.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-slate-900 rounded-lg p-6 text-slate-100 overflow-x-auto">
            <h3 className="text-lg font-bold mb-4 text-sky-400">Tailwind CSS Example</h3>
            <pre className="font-mono text-sm">{`<div className="group relative">
  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 
                   rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
  <div className="relative bg-white rounded-lg p-6">
    {/* Card content */}
  </div>
</div>`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
