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

export function setThemePrefrence() {
  const preferenceIsDark = localStorage.theme == 'dark'
  let selectedOptionElement: Element

  if (preferenceIsDark || systemPreferenceIsDark()) {
    selectedOptionElement = document.querySelector('#theme-dialog>li#dark')

    document.documentElement.classList.add('dark')
  } else {
    selectedOptionElement = document.querySelector('#theme-dialog>li#light')

    const sunSvg = getClonedElementFrom(
      document.body,
      '#theme-dialog>li#light>svg'
    )
    changeThemeButtonIcon(sunSvg)

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
      break
    }

    case 'light': {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      break
    }

    case 'system': {
      localStorage.removeItem('theme')

      if (systemPreferenceIsDark()) {
        document.documentElement.classList.add('dark')
      }

      break
    }
  }

  changeThemeButtonIcon(currentIcon)
}
