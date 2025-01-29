import { Hero } from '@/components/sections/Hero'
import { Reviews } from '@/components/sections/Reviews'
import { Products } from '@/components/sections/Products'
import { Services } from '@/components/sections/Services'

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <Hero />
      <Reviews />
      <Products />
      <Services />
    </main>
  )
}
