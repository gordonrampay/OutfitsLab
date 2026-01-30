'use client'
import { useCustomizer, Part } from '@/store/useCustomizer'
import { BgColorsOutlined, CheckOutlined } from '@ant-design/icons'

type Hex = `#${string}`
const PALETTE = ['#f5c49e','#eab308','#f59e0b','#111827','#6b7280','#ef4444','#22c55e','#3b82f6'] as const
type PaletteColor = (typeof PALETTE)[number]

export default function ColorSwatches({ part, label }: { part: Part; label: string }) {
  const color = useCustomizer((s) => s.colors[part])
  const setColor = useCustomizer((s) => s.setColor)

  const handlePick = (c: PaletteColor) => setColor(part, c as Hex)

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-medium">
        <BgColorsOutlined className="text-gray-500" />
        <span>{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {PALETTE.map((c) => {
          const active = color === c
          return (
            <button
              key={c}
              onClick={() => handlePick(c)}
              className={`relative h-8 w-8 rounded-full ring-offset-2 ${active ? 'ring-2 ring-orange-400' : ''}`}
              style={{ background: c }}
              aria-label={`color ${c}`}
              title={c}
            >
              {active && (
                <span className="absolute inset-0 grid place-items-center text-white">
                  <CheckOutlined />
                </span>
              )}
            </button>
          )
        })}
        <label className="inline-flex h-8 items-center gap-2 rounded-md border px-2 text-xs text-gray-700">
          <BgColorsOutlined />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(part, e.currentTarget.value as Hex)}
            className="h-6 w-10 cursor-pointer border-0 bg-transparent p-0"
            title="Chọn màu bất kỳ"
          />
        </label>
      </div>
    </div>
  )
}