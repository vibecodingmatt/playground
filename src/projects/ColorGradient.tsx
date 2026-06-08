import { useState } from 'react'

const gradients = [
  { name: 'Sunset', from: '#FF6B6B', to: '#FFE66D' },
  { name: 'Ocean', from: '#0EA5E9', to: '#06B6D4' },
  { name: 'Forest', from: '#10B981', to: '#059669' },
  { name: 'Purple', from: '#8B5CF6', to: '#EC4899' },
  { name: 'Fire', from: '#F87171', to: '#FCD34D' },
  { name: 'Cool', from: '#3B82F6', to: '#1E40AF' },
]

export default function ColorGradientPlayground() {
  const [fromColor, setFromColor] = useState('#0EA5E9')
  const [toColor, setToColor] = useState('#06B6D4')
  const [angle, setAngle] = useState(135)

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${fromColor}, ${toColor})`,
  }

  const css = `background: linear-gradient(${angle}deg, ${fromColor}, ${toColor});`

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Color Gradient Lab</h1>
        <p className="text-slate-600 mb-8">Create beautiful color gradients with instant preview</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Preview */}
          <div className="lg:col-span-2">
            <div
              style={gradientStyle}
              className="w-full h-96 rounded-xl shadow-2xl mb-6"
            />
            
            {/* Code Output */}
            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-slate-400 mb-2">// Copy this CSS</div>
              <div>{css}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 h-fit">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                From Color
              </label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={fromColor}
                  onChange={(e) => setFromColor(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer border-2 border-slate-200"
                />
                <input
                  type="text"
                  value={fromColor}
                  onChange={(e) => setFromColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                To Color
              </label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={toColor}
                  onChange={(e) => setToColor(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer border-2 border-slate-200"
                />
                <input
                  type="text"
                  value={toColor}
                  onChange={(e) => setToColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Angle: {angle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Presets
              </label>
              <div className="space-y-2">
                {gradients.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      setFromColor(preset.from)
                      setToColor(preset.to)
                    }}
                    className="w-full text-left px-3 py-2 rounded border border-slate-200 hover:border-slate-400 transition-colors text-sm font-medium"
                  >
                    <div
                      className="w-full h-6 rounded mb-1"
                      style={{
                        background: `linear-gradient(90deg, ${preset.from}, ${preset.to})`,
                      }}
                    />
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
