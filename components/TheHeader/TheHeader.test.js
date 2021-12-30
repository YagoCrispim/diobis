import TheHeader from './TheHeader'
import { render, screen } from '@testing-library/react'

describe('TheHeader', () => {
  it('Checking if the component is rendered', () => {
    render(<TheHeader />)
  })

  it('Checking if menus are rendered', () => {
    render(<TheHeader />)
    expect(screen.getByText('Sou desenvolvedor(a)'))
    // expect(screen.getByText('Sou recrutador(a)'))
  })
})
