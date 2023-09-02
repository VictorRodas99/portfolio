import '../css/gradient-background.css'
import { Gradient } from '@client-scripts/gradient-background/gradient'
import { useEffect } from 'react'

export default function GradientBackground() {
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])

  return (
    <div id="gradient-mask" className="-z-20 absolute w-full h-full top-0 left-0">
      <div className="w-full h-full absolute">
        <canvas
          id="gradient-canvas"
          className="w-full h-full"
        ></canvas>
      </div>

      <div className="relative w-full h-full overflow-hidden">
        <div className="hidden sm:block bg-secondary-200 dark:bg-secondary-300 w-[500%] h-full rotate-[-15deg] sm:translate-y-[50%] sm:translate-x-[-30%] lg:translate-y-[55%] lg:translate-x-[-35%]">
        </div>
      </div>
    </div>
  )
}