'use client'

import dynamic from 'next/dynamic'
import Sidebar from '@/components/main/product/tryon/Sidebar'
import OutfitCarousel from '@/components/main/product/tryon/OutfitCarousel'

const ModelViewer = dynamic(
  () => import('@/components/main/product/tryon/ModelViewer'),
  { ssr: false }
)

export default function TryOnClient() {   
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-7xl px-4 py-6 w-full">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Try‑On Room</h1>
          <p className="text-sm text-gray-600">Design your perfect outfit in real‑time</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <section className="flex flex-col gap-7 space-y-6">
            <ModelViewer />
            <OutfitCarousel />
          </section>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}