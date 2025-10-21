import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Advantages from '@/components/sections/Advantages'
import ValueProposition from '@/components/sections/ValueProposition'
import Alliances from '@/components/sections/Alliances'
import TargetAudience from '@/components/sections/TargetAudience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <About />
      <Services />
      <Advantages />
      <ValueProposition />
      <TargetAudience />
      <Alliances />
      <Contact />
    </>
  )
}