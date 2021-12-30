import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

// ------------ Components ------------
import {
  AppLabel,
  AppReader,
  AppAlert,
  TheHeader,
  Links,
  Creds,
} from '../../../../components'

// ------------ Styles ------------
import * as CSS from './issue.styled'

// ------------ Icons ------------
import { ShareIcon } from '@heroicons/react/outline'

// ------------ Local components ------------
import OthersJobs from './_components/OthersJobs/OthersJobs'
import ClipboardBubble from './_components/ClipboardNotification/ClipboardBubble'

// ------------ Services ------------
import Service from '../../../../services/Jobs.service'

// ------------ Redux actions ------------
import { OTHER_JOBS } from '../../../../store/ducks/_Jobs/actions'

const Issue = ({ repo }) => {
  const { query, pathname } = useRouter()
  const dispatch = useDispatch()

  // Redux
  const Jobs = useSelector(({ Jobs }) => Jobs.data)
  const OtherJobs = useSelector(({ Jobs }) => Jobs.otherJobs)
  const [JobsInfo, setJobsInfo] = useState([])

  // Layout organization
  const [loading, setLoading] = useState(true)
  const [noAnimation, setNoAnimation] = useState(true)
  const [renderLinks, setRenderLinks] = useState(false)
  const [linksVisibility, setLinksVisibility] = useState(false)
  const [renderCloseIcon, setRenderCloseIcon] = useState(false)
  const [renderCreds, setRenderCreds] = useState(false)
  const [credsVisibility, setCredsVisibility] = useState(false)
  const [bubbleVisibilty, setBubbleVisibilty] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Other infos
  const [error, setError] = useState({
    isActive: false,
    message: '',
    status: '',
  })

  // Effects
  useEffect(() => {
    // Nao executa caso a query ainda nao tenha sido carregada.
    if (!query.issue) return

    // Executa caso a query tenha sido carrega.
    const Job = Jobs.find(({ job }) => job.id === query.issue)

    if (Job) {
      setLoading(false)
      setJobsInfo(Job)
    } else {
      Service.getByID(query.issue, repo).then(
        success => {
          setJobsInfo(success)
          setLoading(false)
          return success
        },
        ({ message, status }) => {
          setError({ isActive: true, message, status })
          setLoading(false)
        }
      )
    }
  }, [query.issue])

  useEffect(() => {
    if (!query.issue) return

    if (!!JobsInfo.user) {
      return dispatch(OTHER_JOBS(JobsInfo.user.name, repo))
    }
  }, [query.issue, JobsInfo])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  // Page funcs
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }

  function copyToClipboard() {
    const url = window.location.href

    navigator.clipboard
      .writeText(url)
      .then(() => (bubbleVisibilty ? '' : setBubbleVisibilty(!bubbleVisibilty)))
      .then(() => {
        setTimeout(() => {
          if (!bubbleVisibilty) return setBubbleVisibilty(oldState => !oldState)
        }, 2000)
      })
      .catch(err => console.log(err.message))
  }

  // ----------- Animations cycle ------------
  /*
      Ao final da animação ele remove da DOM o elemento.
      Recebendo apenas 'display:none' não é possível clicar em nada que
    estará abaixo do elemento de links.

    TODO => Refatorar lógica de render do componente links
   */
  function toggleRenderLinks() {
    setRenderCloseIcon(old => !old)

    if (renderLinks) {
      setTimeout(() => {
        setRenderLinks(false)
      }, 300)
    } else {
      setRenderLinks(true)
    }
  }

  function toggleRenderCreds() {
    if (renderCreds) {
      setTimeout(() => {
        setRenderCreds(false)
      }, 300)
    } else {
      setRenderCreds(true)
    }
  }

  return (
    <>
      <TheHeader
        renderCloseIcon={renderCloseIcon}
        openLinks={() => {
          // Anymation cycle
          // Change state when click on another header btn
          if (noAnimation) setNoAnimation(false)

          if (renderCreds) {
            toggleRenderCreds()
            setCredsVisibility(old => !old)
          }

          toggleRenderLinks()
          setLinksVisibility(old => !old)
        }}
        openCreds={() => {
          // Anymation cycle
          // Change state when click on another header btn

          if (noAnimation) setNoAnimation(false)

          if (renderLinks) {
            toggleRenderLinks()
            setLinksVisibility(old => !old)
          }

          toggleRenderCreds()
          setCredsVisibility(old => !old)
        }}
      />
      {renderLinks && (
        <Links noAnimation={noAnimation} visible={linksVisibility} />
      )}

      {/* TODO: Add loading msg */}
      {loading && !error.isActive && (
        <CSS.Loading>
          <span>Carregando a sua vaga 😉</span>
        </CSS.Loading>
      )}

      {!loading && error.isActive && (
        <section>
          <CSS.Container>
            <Head>
              <title>
                {error.status} | {error.message}
              </title>
            </Head>
            <AppAlert type="warning">
              {error.status} | {error.message}
            </AppAlert>
          </CSS.Container>
        </section>
      )}

      {!loading && !error.isActive && !!JobsInfo && (
        <section>
          <Head>
            <title>{JobsInfo.job.title}</title>
          </Head>
          <CSS.Container>
            <CSS.Content>
              {/* Informations Bar */}
              <CSS.InformationsBar hidden={!OtherJobs.slice(1).length}>
                <div>
                  {/* Title and Pic */}
                  <div>
                    <img src={JobsInfo.user.avatar} alt={JobsInfo.user.name} />
                    <h1>{JobsInfo.job.title}</h1>
                  </div>

                  {/* Labels */}
                  <CSS.LabelsContainer>
                    {JobsInfo.job.labels.slice(0, 6).map(label => (
                      <div key={label.id}>
                        <AppLabel
                          key={label.id}
                          color={label.color}
                          value={label.name}
                        />
                      </div>
                    ))}
                  </CSS.LabelsContainer>

                  {/* Actions Bar */}
                  <CSS.Actions>
                    {OtherJobs.length >= 2 && (
                      <h1>
                        Outras vagas de <b>{JobsInfo.user.name}</b>
                      </h1>
                    )}

                    <ClipboardBubble
                      text="Link copiado!"
                      visible={bubbleVisibilty}
                    />
                    <ShareIcon
                      color="#364250"
                      onClick={() => copyToClipboard()}
                    />
                  </CSS.Actions>
                </div>
                <CSS.MoreJobs>
                  <OthersJobs
                    route={pathname.split('/')[1]}
                    repo={repo}
                    user={JobsInfo.user.name}
                  />
                </CSS.MoreJobs>
              </CSS.InformationsBar>
              <CSS.Markdown>
                <div>
                  <AppReader>{JobsInfo.job.markdown}</AppReader>
                </div>
              </CSS.Markdown>
            </CSS.Content>
          </CSS.Container>
          {windowWidth >= 1001 ? (
            <Creds
              showTitle={false}
              noAnimation={noAnimation}
              visible={credsVisibility}
            />
          ) : (
            renderCreds && (
              <Creds
                showTitle={true}
                noAnimation={noAnimation}
                visible={credsVisibility}
              />
            )
          )}
        </section>
      )}
    </>
  )
}

export default Issue
