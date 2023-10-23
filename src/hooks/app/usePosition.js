import { useEffect, useState } from 'react'

export const usePosition = () => {
    const [mouseMovement, setMouseMove] = useState({
        x: 0,
        y: 0
      })
    
      useEffect(() => {
        const mouseMove = (e) => {
          setMouseMove({
            x: e.pageX,
            y: e.pageY
          })
        }
    
        window.addEventListener('mousemove', mouseMove)
        return () => {
          window.removeEventListener('mousemove', mouseMove)
        }
      }, [mouseMovement])
      return { X: mouseMovement.x, Y: mouseMovement.y}
}