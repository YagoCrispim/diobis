import LayoutGrid from './LayoutGrid'
import AppCard from '../AppCard/AppCard'

const List = [
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
  {
    job: {
      id: 1,
      title: 'FrontEnd Developer At FromStrap',
      createdAt: 'at 3 minutes ago',
      labels: [
        { id: 1, name: 'Javascript', color: '#5555' },
        { id: 2, name: 'Typescript', color: '#551' }
      ],
    },
    user: {
      name: 'Washington Junior',
      avatar: 'https://avatars.githubusercontent.com/u/55254037?s=48&v=4',
    },
  },
]

export default {
  title: 'Layout/Grid',
  container: LayoutGrid,
}

const Template = args => <LayoutGrid {...args} />

export const WithCard = Template.bind({})
WithCard.args = {
  children: List.map(card => (
    <AppCard data={card} onSave={console.log} onSelect={console.log} />
  )),
}
