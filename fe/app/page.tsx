import Hero from '@/components/main/homepage/Hero'
import Mission from '@/components/main/homepage/Mission'
import Features from '@/components/main/homepage/Features'

export default function Page() {
  return (
    <main className="bg-transparent w-full max-w-7xl mx-auto px-4 flex flex-col gap-10">
      <Hero />
      <Mission />
      <Features />
    </main>
  )
}