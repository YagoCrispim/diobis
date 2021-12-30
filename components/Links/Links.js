import PropTypes from 'prop-types'
import * as CSS from './Links.styled'
import { useRouter } from 'next/router'

// Components
import External from '../../assets/icons/External'

const links = [
  {
    title: 'Front-end Brasil',
    to: '/frontend',
    github_link: 'https://github.com/frontendbr',
  },
  {
    title: 'Back-end Brasil',
    to: '/backend',
    github_link: 'https://github.com/backend-br',
  },
  {
    title: 'DevOps Brasil',
    to: '/devops',
    github_link: 'https://github.com/DevOps-Brazil',
  },
  {
    title: 'React Brasil',
    to: '/react',
    github_link: 'https://github.com/react-brasil',
  },
  {
    title: 'QA Brasil',
    to: '/qa',
    github_link: 'https://github.com/qa-brasil',
  },
]

const Links = ({ noAnimation, visible }) => {
  const router = useRouter()

  return (
    <CSS.Container>
      <CSS.Content noAnimation={noAnimation} visible={visible}>
        <div>
          {links.map((link, index) => (
            <CSS.Button key={index} active={router?.pathname.includes(link.to)}>
              <a href={link.to} children={link.title} />
              <div
                style={{
                  backgroundColor: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 'none',
                  width: '20px',
                  height: '20px',
                }}
              >
                <a
                  href={link.github_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <External />
                </a>
              </div>
            </CSS.Button>
          ))}
        </div>
      </CSS.Content>
    </CSS.Container>
  )
}

Links.propTypes = {
  visible: PropTypes.bool,
  allRight: PropTypes.bool,
}

export default Links
