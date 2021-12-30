import * as CSS from './Creds.styled'

import GitHub from '../../assets/icons/GitHub'
import LinkedIn from '../../assets/icons/LinkedIn'

const Cred = ({ showTitle, noAnimation, visible }) => (
  <CSS.Container noAnimation={noAnimation} visible={visible}>
    <CSS.Cred>
      {showTitle && <CSS.Title>Desenvolvido por</CSS.Title>}
      <CSS.Infos>
        <CSS.Name>
          <span>Yago Crispim</span>
        </CSS.Name>
        <div>
          <a
            href="https://www.linkedin.com/in/yago-crispim-66b01619b/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/YagoCrispim"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHub />
          </a>
        </div>
      </CSS.Infos>

      <CSS.Separator>
        <div></div>
      </CSS.Separator>

      <CSS.Infos>
        <CSS.Name>
          <span>Washington Jr.</span>
        </CSS.Name>
        <div>
          <a
            href="https://www.linkedin.com/in/washington-junior-7136a8101/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/washingtonj"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHub />
          </a>
        </div>
      </CSS.Infos>
    </CSS.Cred>
  </CSS.Container>
)

export default Cred
