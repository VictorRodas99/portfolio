import { notification } from '@utils/development-notification'

export default function NavList({ className }: { className?: string }) {
  const scrollToSection = (targetSelector: string) => {
    const targetElement = document.querySelector(targetSelector) as HTMLElement

    window.scrollTo({
      top: targetElement.offsetTop
    })
  }

  const showDevNotification = () => {
    notification.showToast()
  }

  return (
    <>
      <li className={className}>
        <a href="/">Inicio</a>
      </li>
      <li className={className}>
        <a href="/about">Acerca de</a>
      </li>
      <li className={className} onClick={() => scrollToSection('#projects-section-title')}>
        Proyectos
      </li>
      <li className={className} onClick={showDevNotification}>
        Contacto
      </li>
    </>
  )
}
