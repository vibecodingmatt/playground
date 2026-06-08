import { useState } from 'react'

const animations = [
  { name: 'Bounce', css: 'animation: bounce 1s infinite;' },
  { name: 'Spin', css: 'animation: spin 2s linear infinite;' },
  { name: 'Pulse', css: 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;' },
  { name: 'Fade', css: 'animation: fadeInOut 2s ease-in-out infinite;' },
  { name: 'Slide', css: 'animation: slideInOut 2s ease-in-out infinite;' },
]

const easing = [
  { name: 'Linear', value: 'linear' },
  { name: 'Ease In', value: 'ease-in' },
  { name: 'Ease Out', value: 'ease-out' },
  { name: 'Ease In Out', value: 'ease-in-out' },
]

export default function AnimationLab() {
  const [selectedAnimation, setSelectedAnimation] = useState(animations[0])
  const [speed, setSpeed] = useState(2)
  const [easeMode, setEaseMode] = useState('ease-in-out')
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Animation Lab</h1>
        <p className="text-slate-600 mb-8">Explore and experiment with CSS animations</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Preview */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <style>{`
              @keyframes fadeInOut {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
              }
              @keyframes slideInOut {
                0%, 100% { transform: translateX(-50px); opacity: 0; }
                50% { transform: translateX(0); opacity: 1; }
              }
              .demo-box {
                animation-play-state: ${isPlaying ? 'running' : 'paused'};
              }
            `}</style>
            <div
              className="demo-box w-24 h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg shadow-2xl"
              style={{
                animation: `${selectedAnimation.name.toLowerCase()} ${speed}s ${easeMode} infinite`,
                animationPlayState: isPlaying ? 'running' : 'paused',
              }}
            />
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 h-fit">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Animation</h3>
              <div className="space-y-2">
                {animations.map((anim) => (
                  <button
                    key={anim.name}
                    onClick={() => setSelectedAnimation(anim)}
                    className={`w-full px-3 py-2 rounded border transition-all text-sm font-medium text-left ${
                      selectedAnimation.name === anim.name
                        ? 'border-sky-500 bg-sky-50 text-sky-900'
                        : 'border-slate-200 hover:border-slate-400 text-slate-700'
                    }`}
                  >
                    {anim.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Speed: {speed}s
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Easing</h3>
              <div className="space-y-2">
                {easing.map((ease) => (
                  <button
                    key={ease.value}
                    onClick={() => setEaseMode(ease.value)}
                    className={`w-full px-3 py-2 rounded border transition-all text-sm font-medium text-left ${
                      easeMode === ease.value
                        ? 'border-sky-500 bg-sky-50 text-sky-900'
                        : 'border-slate-200 hover:border-slate-400 text-slate-700'
                    }`}
                  >
                    {ease.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded transition-colors"
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>

            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs overflow-x-auto">
              <div className="text-slate-400 mb-1">// CSS</div>
              <div>{selectedAnimation.name.toLowerCase()} {speed}s {easeMode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
