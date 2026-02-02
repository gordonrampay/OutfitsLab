// app/page.tsx
import Hero from '@/components/main/homepage/Hero'
import Mission from '@/components/main/homepage/Mission'
import Features from '@/components/main/homepage/Features'

export default function Page() {
  return (
    <main className="w-full w-max-7xl mx-auto flex flex-col">
        <div className="flex flex-col gap-16 md:gap-20 px-4 sm:px-6 lg:px-8">
          <Hero />
          <Mission />
          <Features />
        </div>
    </main>
  )
}