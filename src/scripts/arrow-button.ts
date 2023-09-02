const gotoButton = document.querySelector('#arrow-btn')
const sectionTitle = document.querySelector(
  '#experience-section-title'
) as HTMLHeadingElement

if (!(gotoButton instanceof HTMLButtonElement)) {
  throw new Error('#arrow-btn button does not exists')
}

if (!sectionTitle) {
  throw new Error('Section title does not exists')
}

gotoButton.addEventListener('click', () => {
  window.scrollTo({ top: sectionTitle.offsetTop - 120 })
})
