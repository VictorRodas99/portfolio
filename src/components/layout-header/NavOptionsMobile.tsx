import CloseIcon from '@components/icons/CloseIcon.tsx'
import NavList from '@components/layout-header/NavList.tsx'
import MobileNavController from '@client-scripts/mobile/nav-options'
import { useEffect } from 'react'

// TODO: animate dialog
export default function NavOptionsMobile() {
  useEffect(() => {
    MobileNavController()
  }, [])

  return (
    <dialog id="nav-options-mobile" className="sm:hidden bg-primary-200 dark:bg-secondary-100 dark:text-primary-100 rounded-xl border-[1px] w-full p-7">
      <header className="flex justify-between mb-10">
        <h2>Navegación</h2>
        <button id="nav-options__close-btn">
          <CloseIcon />
        </button>
      </header>
      <ul className="flex flex-col gap-5 [&>li]:border-b-[1px] dark:[&>li]:border-secondary-50 [&>li]:pb-3">
        <NavList />
      </ul>
    </dialog>
  )
}
