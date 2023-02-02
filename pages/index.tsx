import Creations from '@/components/creations/Creations'
import { Features } from '@/components/Features'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <hr className="hidden md:block" />
      <Creations />
    </div>
  )
}
