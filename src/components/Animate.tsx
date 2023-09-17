import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Animate({ children, className }: Props) {
  return (
    <motion.div
      layout
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ ease: 'linear', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
