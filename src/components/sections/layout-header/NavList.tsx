export default function NavList({ className }: { className?: string }) {
  return (
    <>
      <li className={className}>
        <a href="/">Inicio</a>
      </li>
      <li className={className}>
        <a href="#">Acerca de</a>
      </li>
      <li className={className}>
        <a href="#">Proyectos</a>
      </li>
      <li className={className}>
        <a href="#">Contacto</a>
      </li>
    </>
  )
}
