import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'
import { Services } from '@/components/sections/Services'
import { Free } from '@/components/sections/Free'
import { Statistics } from '@/components/sections/Statistics'
import { Reviews } from '@/components/sections/Reviews'

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <Hero />
      <Reviews />
      <Products />
      <Services />
      <Free />
      <Statistics />
    </main>
  )
}
