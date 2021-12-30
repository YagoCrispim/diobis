import { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function useOutsideClick(ref, handle) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return
      handle(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handle])
}
