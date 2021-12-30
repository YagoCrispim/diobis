import Filters from './Filters'

const cards = [
  {
    index: 0,
    title: 'Estado',
    options: [
      { key: 0, active: true, text: 'São Paulo' },
      { key: 1, active: true, text: 'Rio de Janeiro' },
      { key: 2, active: false, text: 'Rio Grande do Sul' },
      { key: 3, active: false, text: 'Remoto' },
    ],
  },
  {
    index: 1,
    title: 'Cidade',
    options: [
      { key: 0, active: true, text: 'São Paulo' },
      { key: 1, active: true, text: 'Rio de Janeiro' },
      { key: 2, active: false, text: 'Curitiba' },
      { key: 3, active: false, text: 'Maceió' },
    ],
  },
]

export default {
  title: 'Layout/Filter',
  component: Filters,
}

const Template = args => <Filters cards={cards} />

export const Defaulte = Template.bind({})
