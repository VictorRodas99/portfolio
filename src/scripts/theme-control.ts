import {
  changeThemeButtonIcon,
  getClonedElementFrom
} from '@utils/element-handling'

const systemPreferenceIsDark = () => {
  return (
    !('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

const changeGradientMainColor = ({ theme }: { theme: 'dark' | 'light' }) => {
  if (theme !== 'dark' && theme !== 'light') {
    throw new Error('Invalid given theme, expected "dark" or "light"')
  }

  const colors = {
    dark: '#281DFF',
    light: '#6ec3f4'
  }

  const mainColorVariable = '--gradient-color-3'
  const canvasSelector = '#gradient-canvas'
  const canvas = document.querySelector(canvasSelector)

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(`Canvas element "${canvasSelector}" does not exists`)
  }

  const canvasStyles = getComputedStyle(canvas)
  const existsVariable = Boolean(
    canvasStyles.getPropertyValue(mainColorVariable)
  )

  if (!existsVariable) {
    throw new Error(
      `CSS variable name ${mainColorVariable} does not exists in the canvas styles declarations`
    )
  }

  canvas.style.setProperty(mainColorVariable, colors[theme])
}

export function setThemePrefrence() {
  const preferenceIsDark = localStorage.theme == 'dark'
  let selectedOptionElement: Element

  if (preferenceIsDark || systemPreferenceIsDark()) {
    selectedOptionElement = document.querySelector('#theme-dialog>li#dark')

    document.documentElement.classList.add('dark')
    changeGradientMainColor({ theme: 'dark' })
  } else {
    selectedOptionElement = document.querySelector('#theme-dialog>li#light')

    const sunSvg = getClonedElementFrom(
      document.body,
      '#theme-dialog>li#light>svg'
    )
    changeThemeButtonIcon(sunSvg)
    changeGradientMainColor({ theme: 'light' })

    document.documentElement.classList.remove('dark')
  }

  selectedOptionElement.ariaSelected = 'true'
}

export function manualHandler(trigger: HTMLElement) {
  const selectedTheme = trigger.id
  const currentIcon = getClonedElementFrom(trigger, 'svg')

  if (
    selectedTheme !== 'dark' &&
    selectedTheme !== 'light' &&
    selectedTheme !== 'system'
  ) {
    return
  }

  switch (selectedTheme) {
    case 'dark': {
      localStorage.setItem('theme', 'dark')

      document.documentElement.classList.add('dark')
      changeGradientMainColor({ theme: 'dark' })

      break
    }

    case 'light': {
      localStorage.setItem('theme', 'light')

      document.documentElement.classList.remove('dark')
      changeGradientMainColor({ theme: 'light' })

      break
    }

    case 'system': {
      localStorage.removeItem('theme')

      if (systemPreferenceIsDark()) {
        document.documentElement.classList.add('dark')
        changeGradientMainColor({ theme: 'dark' })
        break
      }

      changeGradientMainColor({ theme: 'light' })

      break
    }
  }

  changeThemeButtonIcon(currentIcon)
}
