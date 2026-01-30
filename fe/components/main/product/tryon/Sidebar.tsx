'use client'

import { useCustomizer } from '@/store/useCustomizer'
import ColorSwatches from './controls/ColorSwatches'
import { PatternPicker } from './controls/PatternPicker'
import BackgroundPicker from './controls/BackgroundPicker'
import SizePicker from './controls/SizePicker'
import { ModelSelector } from './controls/ModelSelector'
import { OutfitSelector } from './controls/OutfitSelector'
import { WomanOutlined, ManOutlined, SaveOutlined, PlusOutlined } from '@ant-design/icons'

export default function Sidebar() {
  const gender = useCustomizer((s) => s.gender)
  const setGender = useCustomizer((s) => s.setGender)

  return (
    <aside className="h-fit w-full rounded-xl bg-white p-4 shadow">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Model</div>
        <div className="flex gap-2">
          <button
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm ${gender === 'female' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setGender('female')}
            title="Female"
          >
            <WomanOutlined />
            <span className="hidden sm:inline">Female</span>
          </button>
          <button
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm ${gender === 'male' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setGender('male')}
            title="Male"
          >
            <ManOutlined />
            <span className="hidden sm:inline">Male</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <ModelSelector />
        <OutfitSelector />

        <ColorSwatches part="skin" label="Skin color" />
        <ColorSwatches part="top" label="Top color" />
        <PatternPicker target="top" />
        <ColorSwatches part="bottom" label="Bottom color" />
        <PatternPicker target="bottom" />
        <ColorSwatches part="shoes" label="Shoes color" />

        <BackgroundPicker />
        <SizePicker />

        <div className="flex gap-2 pt-2">
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 font-medium text-white shadow hover:opacity-90">
            <SaveOutlined /> Save
          </button>
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700">
            <PlusOutlined /> Add
          </button>
        </div>
      </div>
    </aside>
  )
}