import { notification } from '@utils/development-notification'

export default function NavList({
  className,
  closeDialog
}: {
  className?: string
  closeDialog?: () => void
}) {
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
      <li className={className} onClick={closeDialog}>
        <a href="/#projects">Proyectos</a>
      </li>
      <li
        className={className}
        onClick={() => {
          showDevNotification()
          closeDialog()
        }}
      >
        Contacto
      </li>
    </>
  )
}
