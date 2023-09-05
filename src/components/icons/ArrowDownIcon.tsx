import { forwardRef } from 'react'

const ArrowDownIcon = forwardRef<SVGSVGElement, { id: string }>((props, ref) => {
    return (
    <svg
      {...props}
      ref={ref}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="ml-1 transition-transform"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
    </svg>
  )
})

export default ArrowDownIcon