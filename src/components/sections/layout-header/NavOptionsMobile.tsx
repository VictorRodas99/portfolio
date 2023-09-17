import NavList from '@components/sections/layout-header/NavList.tsx'
import ArrowDownIcon from '@components/icons/ArrowDownIcon'
import CloseIcon from '@components/icons/CloseIcon.tsx'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

export default function NavOptionsMobile() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const arrowIcon = useRef<SVGSVGElement>()
  const navOptionsDialog = useRef<HTMLDivElement>()

  const dialogClickHandler = () => {
    arrowIcon.current.classList.add('rotate-180')
    setModalIsOpen(true)
  }

  const closeBtnClickHandler = () => {
    arrowIcon.current.classList.remove('rotate-180')
    setModalIsOpen(false)
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

      {modalIsOpen && (
        <>
          <div className='fixed right-0 top-0 z-20 w-screen h-screen bg-secondary-50/50'></div>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ ease: 'linear', duration: 0.3 }}
              ref={navOptionsDialog}
              className="fixed left-[10%] top-[15%] w-[80%] z-30 bg-primary-200 dark:bg-secondary-100 dark:text-primary-100 rounded-xl p-7"
            >
              <header className="flex justify-between mb-10">
                <h2>Navegación</h2>
                <button
                  onClick={closeBtnClickHandler}
                  id="nav-options__close-btn"
                >
                  <CloseIcon />
                </button>
              </header>
              <ul className="flex flex-col gap-5 [&>li]:border-b-[1px] dark:[&>li]:border-secondary-50 [&>li]:pb-3">
                <NavList closeDialog={closeBtnClickHandler} />
              </ul>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  )
}
