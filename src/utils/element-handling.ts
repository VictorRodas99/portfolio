import { themeButtonDescendants } from '@client-scripts/dialog-theme-controller'

export function getAllDescendants({
  parent
}: {
  parent: HTMLElement | Element
}): Element[] {
  const allDescendants = []

  if (!parent) {
    throw new Error('Element not found!')
  }

  const getChildren = (node: Element) => {
    for (const child of node.children) {
      getChildren(child)
      allDescendants.push(child)
    }
  }

  getChildren(parent)

  return allDescendants
}

export function getClonedElementFrom(
  parent: HTMLElement,
  selector: string,
  deepClone = true
) {
  if (typeof selector !== 'string') {
    throw new Error('selector is not a string')
  }

  return parent.querySelector(selector).cloneNode(deepClone)
}

export function changeThemeButtonIcon(newIcon: Node) {
  const themeButton = document.querySelector('#theme-button')

  themeButton.removeChild(themeButton.querySelector('svg')) // remove current svg icon
  themeButton.appendChild(newIcon)

  themeButtonDescendants.set(getAllDescendants({ parent: themeButton }))
}
