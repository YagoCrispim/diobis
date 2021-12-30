import AppLabel from './AppLabel'

export default {
  title: 'Components/Label',
  component: AppLabel,
  argTypes: {
    color: {
      control: 'color',
    },
  },
}

const Template = args => <AppLabel {...args} />

export const WithColorIndicator = Template.bind({})
WithColorIndicator.args = {
  value: 'Javascript',
  color: '#E4CF4A',
}

export const WithoutColorIndicator = Template.bind({})
WithoutColorIndicator.args = {
  value: 'Typescript',
}
