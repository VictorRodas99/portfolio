import { notification } from '@utils/development-notification'
import { getLangfromUrl } from '@i18n/utils'
import { useState, useEffect } from 'react'
import { ui, defaultLang } from '@i18n/ui'

interface NavProps {
  className?: string
  closeDialog?: () => void
}

export default function NavList({
  className,
  closeDialog
}: NavProps) {
  const [nav, setNav] = useState(ui[defaultLang])  

  useEffect(() => {
    const lang = getLangfromUrl(new URL(window.location.href))

    console.log({ lang })

    setNav(ui[lang])
  }, [])
  
  const showDevNotification = () => {
    notification.showToast()
  }

  return (
    <>
      <li className={className}>
        <a href="/">{nav['nav.home']}</a>
      </li>
      <li className={className}>
        <a href="about">{nav['nav.about']}</a>
      </li>
      <li className={className} onClick={closeDialog}>
        <a href="#projects">{nav['nav.projects']}</a>
      </li>
      <li
        className={className}
        onClick={() => {
          showDevNotification()
          closeDialog()
        }}
      >
        {nav['nav.contact']}
      </li>
    </>
  )
}
