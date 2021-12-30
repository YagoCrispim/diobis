import tw from 'twin.macro'
import LayoutContainer from './LayoutContainer'

const LineDemo = tw.div`w-full h-24 bg-red-500`

export default {
  title: 'Layout/Container',
  component: LayoutContainer
}

const Template = ({ children, ...rest }) => (
  <LayoutContainer {...rest}>{children}</LayoutContainer>
)

export const WithChildren = Template.bind({})
WithChildren.args = {
  children: (
    <div style={{ width: '100%' }}>
      <p>Estamos dentro de um container.</p>
      <LineDemo />
    </div>
  ),
}
