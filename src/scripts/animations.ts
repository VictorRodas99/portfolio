import { getParsedCSSVariableDuration } from '@utils/general-tools'

interface AnimateParams {
  selector: string
  classTrigger: string
}

export function animateButtons({ selector, classTrigger }: AnimateParams) {
  const ANIMATION_MILLISECONDS = getParsedCSSVariableDuration({
    variableName: '--animation-duration'
  })

  const buttons = Array.from(document.querySelectorAll(selector))
  const existsButtons = buttons.every(
    (element) => element instanceof HTMLButtonElement
  )

  if (!existsButtons) {
    throw new Error(`There is no buttons with class "${selector}"`)
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      button.classList.add(classTrigger)

      setTimeout(() => {
        button.classList.remove(classTrigger)
      }, ANIMATION_MILLISECONDS)
    })
  }
}
