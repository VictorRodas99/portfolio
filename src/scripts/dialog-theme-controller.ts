import { getAllDescendants } from '@utils/element-handling'
import { atom } from 'nanostores'

const themeDialog = document.querySelector('#theme-dialog') as HTMLUListElement
const themeButton = document.querySelector('#theme-button') as HTMLButtonElement

if (!themeDialog || !themeButton) {
  throw new Error(
    'There is no element with id "theme-dialog" or element with id "theme-button"'
  )
}

let dialogState = false

// Keep descendants in memory to avoid unnecessary operations
export const themeButtonDescendants = atom([]) // to share states beetween scripts
let themeDialogDescendants = []

function themeDialogController(event: Event) {
  if (!themeButtonDescendants.get().length && !themeDialogDescendants.length) {
    themeButtonDescendants.set(getAllDescendants({ parent: themeButton }))
    themeDialogDescendants = getAllDescendants({ parent: themeDialog })
  }

  const isDialogDescendant = themeDialogDescendants.find(
    (child) => child === event.target
  )

  if (isDialogDescendant) {
    return
  }

  const isTriggerDescendant = themeButtonDescendants
    .get()
    .find((child) => child == event.target)

  let displayState = ''

  if (isTriggerDescendant) {
    dialogState = !dialogState
    displayState = dialogState ? 'flex' : 'none'
  } else {
    displayState = 'none'
  }

  themeDialog.style.display = displayState
}

window.addEventListener('click', themeDialogController)
