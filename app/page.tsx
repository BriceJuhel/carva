import Presentation from "@/components/Presentation"
import Activities from "@/components/Activities"
import Prices from "@/components/Prices"
import Schedule from "@/components/Schedule"
import Contact from "@/components/Contact"
import Partners from "@/components/Partners"



export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Presentation />
      <Activities />
      <Prices />
      <Schedule />
      <Contact />
      <Partners />
    </main>
  )
}