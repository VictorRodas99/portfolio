import { getAllDescendants } from '@utils/element-handling'

let triggerDescendants: Element[] = []
let dialogDescendants: Element[] = []

interface Parents {
  dialogState: boolean,
  trigger: HTMLElement,
  dialog: HTMLElement
}

export function changeDialogState(event: Event, { dialogState, trigger, dialog }: Parents): boolean {
  if (!triggerDescendants.length && !dialogDescendants.length) {
    triggerDescendants = getAllDescendants({ parent: trigger })
    dialogDescendants = getAllDescendants({ parent: dialog })
  }

  const isDialogDescendant = dialogDescendants.find(
    (child) => child === event.target
  )

  if (isDialogDescendant) {
    return dialogState
  }

  const isTriggerDescendant = triggerDescendants
    .find((child) => child == event.target)

  if (!isTriggerDescendant) {
    dialog.style.display = 'none'
    return false
  }

  return dialogState
}
