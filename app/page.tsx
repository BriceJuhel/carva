import Presentation from "@/components/Presentation"
import Activities from "@/components/Activities"



export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Presentation />
      <Activities />
    </main>
  )
}