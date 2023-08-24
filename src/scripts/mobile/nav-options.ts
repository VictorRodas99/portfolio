const arrowIcon = document.querySelector('#arrow-menu')
const mobileMenuTrigger = document.querySelector('#mobile-menu-trigger') as HTMLDivElement
const navOptionsDialog = document.querySelector('#nav-options-mobile') as HTMLDialogElement
const closeButton = document.querySelector('#nav-options__close-btn') as HTMLButtonElement

if(!(closeButton instanceof HTMLButtonElement)) {
  throw new Error('"#nav-options__close-btn" button does not exists')
}

if(!(navOptionsDialog instanceof HTMLDialogElement)) {
  throw new Error('"#nav-options-mobile" dialog element does not exists')
}

mobileMenuTrigger.addEventListener('click', () => {
  navOptionsDialog.showModal()
  arrowIcon.classList.add('rotate-180')
})

closeButton.addEventListener('click', () => {
  navOptionsDialog.close()
  arrowIcon.classList.remove('rotate-180')
})