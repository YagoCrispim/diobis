import AppAlert from './AppAlert'

export default {
  title: 'Components/Alert',
  component: AppAlert
}

const Template = args => <AppAlert {...args} />

export const Success = Template.bind({})
Success.args = {
  children: <p>This is a success alert <a href="">view more</a>!</p>
}

export const Alert = Template.bind({})
Alert.args = {
  children: <p>This is a Alert template</p>,
  type: "alert"
}

export const Warning = Template.bind({})
Warning.args = {
  children: <p>This is a warning template</p>,
  type: "warning"
}

export const Message = Template.bind({})
Message.args = {
  children: <p>This is a message!</p>,
  type: "message"
}
