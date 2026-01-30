'use client'

import dynamic from 'next/dynamic'
import Sidebar from '@/components/main/product/tryon/Sidebar'
import OutfitCarousel from '@/components/main/product/tryon/OutfitCarousel'

// Chỉ dùng dynamic ở Client Component này
const ModelViewer = dynamic(
  () => import('@/components/main/product/tryon/ModelViewer'),
  { ssr: false }
)

export default function TryOnClient() {   // <-- default export, không đổi tên
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Try‑On Room</h1>
        <p className="text-sm text-gray-600">Design your perfect outfit in real‑time</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="space-y-6">
          <ModelViewer />
          <OutfitCarousel />
        </section>
        <aside>
          <Sidebar />
        </aside>
      </div>
    </main>
  )
}