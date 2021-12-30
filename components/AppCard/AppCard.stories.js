import AppCard from './AppCard'
import tw from 'twin.macro'

export default {
  title: 'Components/Card',
  component: AppCard,
}

const Container = tw.div`max-w-md`

const Template = args => (
  <Container>
    <AppCard {...args} />
  </Container>
)

export const toJobs = Template.bind({})
toJobs.args = {
  data: {
    job: {
      id: 1,
      title: '[REMOTO] Júnior ou Estagiário - Front-end Developer apaixonado...',
      createdAt: 'at 3 minutes ago',
      labels: [
        // Exemplos retirar da plataforma
        { id: 1, name: 'Alocado', color: 'purple' },
        { id: 2, name: 'PJ', color: '#551' },
        { id: 2, name: 'São Paulo', color: 'aquamarine' },
        { id: 4, name: 'Sênior', color: 'salmon' },
        { id: 5, name: 'Mais...', color: 'red' },
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  onSave: () => console.log('Saved'),
  onSelect: () => console.log('Has selected'),
  loading: false,
}
