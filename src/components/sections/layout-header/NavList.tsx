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
  const [lang, setLang] = useState(defaultLang)
  const [nav, setNav] = useState(ui[defaultLang])  

  useEffect(() => {
    const lang = getLangfromUrl(new URL(window.location.href))

    setNav(ui[lang])
    setLang(lang)
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
        <a href={`/${lang}/#projects`}>{nav['nav.projects']}</a>
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
