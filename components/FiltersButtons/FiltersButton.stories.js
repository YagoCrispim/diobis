import React from 'react'
import Button from './FiltersButton'
import tw from 'twin.macro'

export default {
  title: 'Components/Button',
  component: Button,
}

const Container = tw.div`max-w-md`

const Template = () => (
  <Container>
    <Button title="Button" />
  </Container>
)

export const Default = Template.bind({})
