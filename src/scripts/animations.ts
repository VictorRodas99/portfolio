import {
  getParsedCSSVariableDuration,
  getRandomNumberUp,
  getMajorLength
} from '@utils/general-tools'

interface AnimateParams {
  selector: string
  classTrigger: string
}

interface HeroAnimation {  
  target: Element | Element[]
  selector: string
  multiElements: boolean
  messages: string[]
  messageIndex: number
  currentLength: number
  characters: string
  fadeBuffer: { c: number, l: string }[]
  generateRandomString({ randomStringLength }: { randomStringLength: number }): string
  animateRandomCharacters(): void
  animateFadeBuffer(): void
  cycleText(): void
}

function animateButtons({ selector, classTrigger }: AnimateParams) {
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

/**
 * Generate random text animations
 */
class HeroAnimation implements HeroAnimation {
  constructor(selector: string, messages: string[], multiElements = false) {
    this.multiElements = Boolean(multiElements)
    this.selector = selector

    const target = multiElements
      ? document.querySelectorAll(selector)
      : document.querySelector(selector)
    
    if (!(target instanceof NodeList)) {
      if (!target) {
        throw new Error(`element with given selector "${selector}" does not exists`)
      }

      this.target = target
    } else {
      if (!target.length) {
        throw new Error(`Elements with given selector "${selector}" doest no exists`)
      }

      this.target = Array.from(target)
    }

    this.messages = messages

    this.messageIndex = 0
    this.currentLength = 0
    this.characters = '&#*+%?£@§$abcdefghijklmnopwrstwxyz'

    this.fadeBuffer = []

    setTimeout(this.animateRandomCharacters.bind(this), 100)
  }

  private setMessage(message: string) {
    if (this.multiElements && this.target instanceof Element) {
      this.target.textContent = message
    } else {
      (this.target as Element[]).forEach((element) => element.textContent = message)
    }
  }

  generateRandomString({ randomStringLength }: { randomStringLength: number }) {
    if (typeof randomStringLength !== 'number') {
      throw new Error('Expected randomStringLength to be number')
    }

    let randomText = ''
    let control = 0

    while (control < randomStringLength) {
      const randomNumber = getRandomNumberUp(this.characters.length)
      randomText += this.characters.charAt(randomNumber)

      control++
    }

    return randomText
  }

  animateRandomCharacters() {
    const currentMessage = this.messages[this.messageIndex]

    if (this.currentLength < currentMessage.length) {
      this.currentLength += 2

      if (this.currentLength > currentMessage.length) {
        this.currentLength = currentMessage.length
      }

      const message = this.generateRandomString({ randomStringLength: this.currentLength })
      this.setMessage(message)

      setTimeout(this.animateRandomCharacters.bind(this), 20)
    } else {
      setTimeout(this.animateFadeBuffer.bind(this), 20)
    }
  }

  animateFadeBuffer() {
    const currentMessage = this.messages[this.messageIndex]

    if (!this.fadeBuffer.length) {
      for (let i = 0; i < currentMessage.length; i++) {
        this.fadeBuffer.push({
          c: getRandomNumberUp(getMajorLength({ messages: this.messages })),
          l: currentMessage.charAt(i)
        })
      }
    }

    let doCycles = false
    let message = ''

    for (const fader of this.fadeBuffer) {
      if (fader.c < 0) {
        message += fader.l
        continue
      }

      doCycles = true
      fader.c--

      const randomIndex = getRandomNumberUp(this.characters.length)
      message += this.characters.charAt(randomIndex)
    }

    this.setMessage(message)

    if (doCycles) {
      setTimeout(this.animateFadeBuffer.bind(this), 50)
    } else {
      setTimeout(this.cycleText.bind(this), 2000)
    }
  }

  cycleText() {
    this.messageIndex++

    if (this.messageIndex >= this.messages.length) {
      this.messageIndex = 0;
    }

    this.currentLength = 0
    this.fadeBuffer = []

    this.setMessage('')

    setTimeout(this.animateRandomCharacters.bind(this), 200)
  }
}

export { animateButtons, HeroAnimation }
