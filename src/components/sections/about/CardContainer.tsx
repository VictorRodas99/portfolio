import AwesomeCard from '@components/sections/about/Card'
import { useEffect, useState } from 'react'
import { FLAVORS } from '@utils/about-card-flavors/data'

export default function AwesomeCardContainer() {
  const [flavor, setFlavor] = useState(FLAVORS.javascript)

  useEffect(() => {
    const arrayFlavors = Object.values(FLAVORS)

    const changeFlavor = () => {
      const randomIndex = Math.ceil(Math.random() * arrayFlavors.length - 1)
      const currentFlavor = arrayFlavors[randomIndex]
      setFlavor(currentFlavor)
    }

    const intervalFlavor = setInterval(changeFlavor, 3000)

    return () => {
      clearInterval(intervalFlavor)
    }
  }, [])

  return (  
    <div>
      <AwesomeCard flavor={flavor} />
    </div>
  )
}
