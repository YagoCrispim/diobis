import ClipboardBubble from './ClipboardBubble'

export default {
  title: 'Components/Clipboard bubble',
  component: ClipboardBubble,
}

export const Bubble = () => (
  <ClipboardBubble text="Link copiado!" visible={true} />
)
