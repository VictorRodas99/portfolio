import { notification } from '@utils/development-notification'

export default function NavList({ className }: { className?: string }) {
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
      <li className={className}>
        <a href="/#projects">Proyectos</a>
      </li>
      <li className={className} onClick={showDevNotification}>
        Contacto
      </li>
    </>
  )
}
