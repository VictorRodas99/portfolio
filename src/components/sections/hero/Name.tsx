import { useEffect } from 'react'
import { HeroAnimation } from '@client-scripts/animations'

export default function HeroName({ prefix }: { prefix: string }) {
  useEffect(() => {
    const messages = ['Víctor Rodas', 'Web Developer']

    new HeroAnimation('.hero-name', messages, true)
  }, [])

  return (
    <div
      id="hero-text"
      className="flex flex-col md:flex-row gap-3 text-4xl md:text-5xl font-semibold select-none"
    >
      <span className="text-secondary-200">{prefix}</span>
      <div id="overlay">
        <h1 className=" text-secondary-200 mix-blend-color-burn absolute hero-name">
          Víctor Rodas
        </h1>
        <p className="text-primary-50 asbolute opacity-40 hero-name">
          Víctor Rodas
        </p>
      </div>
    </div>
  )
}
