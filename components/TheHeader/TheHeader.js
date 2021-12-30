import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '../../assets/icons'
import * as CSS from './TheHeader.styled'

// Icons
import MoreRepos from '../../assets/icons/MoreRepos'
import CloseRepos from '../../assets/icons/CloseRepos'
import About from '../../assets/icons/About'
import External from '../../assets/icons/External'

const links = [
  {
    title: 'Front-end Br',
    to: '/frontend',
    github_link: 'https://github.com/frontendbr',
  },
  {
    title: 'Back-end Br',
    to: '/backend',
    github_link: 'https://github.com/backend-br',
  },
  {
    title: 'DevOps Brasil',
    to: '/devops',
    github_link: 'https://github.com/DevOps-Brazil',
  },
  {
    title: 'React Br',
    to: '/react',
    github_link: 'https://github.com/react-brasil/vagas',
  },
  {
    title: 'QA Br',
    to: '/qa',
    github_link: 'https://github.com/qa-brasil',
  },
]

const TheHeader = ({ openLinks, renderCloseIcon, openCreds }) => {
  const router = useRouter()
  return (
    <CSS.Header>
      <CSS.Container>
        <a href="/frontend">
          <CSS.LogoContainer>
            <Logo alt="tela inicial" />
          </CSS.LogoContainer>
        </a>
        <CSS.Navbar>
          <CSS.Navigator>
            {links.map((link, idx) => (
              <CSS.Link key={idx} active={router?.pathname.includes(link.to)}>
                {/* Proj Issues nº 1 */}
                {/* <Link href={link.to} children={link.title} /> */}

                <a href={link.to} children={link.title} />
                <a  
                  style={{ marginLeft: '10px' }}
                  href={link.github_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <External />
                </a>
              </CSS.Link>
            ))}
          </CSS.Navigator>
        </CSS.Navbar>

        <CSS.NavbarMobile>
          {renderCloseIcon ? (
            <>
              <button name="abrir créditos" onClick={openCreds}>
                <About />
              </button>
              <button name="abrir links" onClick={openLinks}>
                <CloseRepos />
              </button>
            </>
          ) : (
            <>
              <button name="abrir créditos" onClick={openCreds}>
                <About />
              </button>
              <button name="abrir links" onClick={openLinks}>
                <MoreRepos />
              </button>
            </>
          )}
        </CSS.NavbarMobile>
      </CSS.Container>
    </CSS.Header>
  )
}

export default TheHeader
