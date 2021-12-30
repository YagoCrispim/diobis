import AppLabel from './AppLabel'
import { render, screen } from '@testing-library/react'

describe('AppLabel', () => {
  it('Checking if the component is rendered', () => {
    render(<AppLabel value="Javascript" />)
  })

  it('Checking component has rendered with color tag', () => {
    render(<AppLabel value="Javascript" color="#E4CF4A" />)
  })
})
