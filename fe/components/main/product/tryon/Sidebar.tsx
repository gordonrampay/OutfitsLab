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
    <div className="h-fit w-full rounded-lg bg-white p-6 shadow-lg border border-gray-300">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-800">Model</div>
        <div className="flex gap-2">
          <button
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${gender === 'female' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setGender('female')}
            title="Female"
          >
            <WomanOutlined />
            <span className="hidden sm:inline">Female</span>
          </button>
          <button
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${gender === 'male' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
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

        <div className="border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800">Colors</div>
          <ColorSwatches part="skin" label="Skin color" />
          <ColorSwatches part="top" label="Top color" />
          <ColorSwatches part="bottom" label="Bottom color" />
          <ColorSwatches part="shoes" label="Shoes color" />
        </div>

        <div className="border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800">Pattern</div>
          <PatternPicker target="top" />
          <PatternPicker target="bottom" />
        </div>

        <div className="border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800">Background</div>
          <BackgroundPicker />
        </div>

        <div className="border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800">Size</div>
          <SizePicker />
        </div>

        <div className="flex gap-2 pt-4">
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2 font-medium text-white shadow hover:bg-teal-500">
            <SaveOutlined /> Save
          </button>
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 transition duration-200">
            <PlusOutlined /> Add
          </button>
        </div>
      </div>
    </div>
  )
}