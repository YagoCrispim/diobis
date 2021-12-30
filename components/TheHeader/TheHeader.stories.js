import TheHeader from './TheHeader'

export default {
  title: 'Layout/Header',
  component: TheHeader,
}

const Template = args => <TheHeader {...args} />

export const Default = Template.bind({})
