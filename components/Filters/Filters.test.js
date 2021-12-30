import Filters from './Filters.js'
import { render, screen } from '@testing-library/react'

const cards = [
  {
    index: 0,
    title: 'Estado',
    options: [
      { key: 0, active: false, text: 'São Paulo' },
      { key: 1, active: false, text: 'Santa Catarina' },
      { key: 2, active: false, text: 'Paraná' },
      { key: 3, active: false, text: 'Espírito Santo' },
      { key: 4, active: false, text: 'Distrito Federal' },
      { key: 5, active: false, text: 'Rio grande do Sul' },
      { key: 6, active: false, text: 'Minas Gerais' },
      { key: 7, active: false, text: 'Rio de Janeiro' },
      { key: 8, active: false, text: 'Mato Grosso do Sul' },
      { key: 9, active: false, text: 'Pernambuco' },
      { key: 10, active: false, text: 'Bahia' },
    ],
  },
  {
    index: 1,
    title: 'Alocação',
    options: [
      { key: 0, active: false, text: 'Presencial' },
      { key: 1, active: false, text: 'Remoto' },
    ],
  },
  {
    index: 2,
    title: 'Experiência',
    options: [
      { key: 0, active: false, text: 'Júnior' },
      { key: 1, active: false, text: 'Pleno' },
      { key: 2, active: false, text: 'Sênior' },
      { key: 3, active: false, text: 'Especialista' },
    ],
  },
  {
    index: 3,
    title: 'Contratação',
    options: [
      { key: 0, active: false, text: 'CLT' },
      { key: 1, active: false, text: 'Contrato' },
      { key: 2, active: false, text: 'Estagiário' },
      { key: 3, active: false, text: 'PJ' },
      { key: 4, active: false, text: 'Traine' },
      { key: 5, active: false, text: 'Freela' },
    ],
  },
]

describe('TheFilters', () => {
  it('Checking if the component is rendered', () => {
    render(<Filters cards={cards} />)
  })

  it('Checking if filters are rendered', () => {
    render(<Filters cards={cards} />)
    expect(screen.getByText('Estado'))
    expect(screen.getByText('Alocação'))
  })
})
