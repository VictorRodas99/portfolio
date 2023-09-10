import NavList from '@components/sections/layout-header/NavList.tsx'
import ArrowDownIcon from '@components/icons/ArrowDownIcon'
import CloseIcon from '@components/icons/CloseIcon.tsx'
import { useRef } from 'react'

// TODO: animate dialog
export default function NavOptionsMobile() {
  const arrowIcon = useRef<SVGSVGElement>()
  const navOptionsDialog = useRef<HTMLDialogElement>()

  const dialogClickHandler = () => {
    navOptionsDialog.current.showModal()
    arrowIcon.current.classList.add('rotate-180')
  }

  const closeBtnClickHandler = () => {
    navOptionsDialog.current.close()
    arrowIcon.current.classList.remove('rotate-180')
  }

  return (
    <>
      <button
        onClick={dialogClickHandler}
        id="mobile-menu-trigger"
        className="px-3 p-2 flex gap-1 justify-center items-center sm:hidden"
      >
        Menú
        <ArrowDownIcon id="arrow-menu" ref={arrowIcon} />
      </button>

      <dialog
        id="nav-options-mobile"
        ref={navOptionsDialog}
        className=" bg-primary-200 dark:bg-secondary-100 dark:text-primary-100 rounded-xl border-[1px] w-full p-7"
      >
        <header className="flex justify-between mb-10">
          <h2>Navegación</h2>
          <button onClick={closeBtnClickHandler} id="nav-options__close-btn">
            <CloseIcon />
          </button>
        </header>
        <ul className="flex flex-col gap-5 [&>li]:border-b-[1px] dark:[&>li]:border-secondary-50 [&>li]:pb-3">
          <NavList closeDialog={closeBtnClickHandler} />
        </ul>
      </dialog>
    </>
  )
}
