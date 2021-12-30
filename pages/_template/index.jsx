import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// ------------ Redux actions ------------
import intialState from '../../store/ducks/_Filter/initialState'
import {
  FETCHING,
  FILTERED_DATA,
  GET_ANOTHER_PAGE,
  UPDATE_CURRENT_PAGE_VALUE,
} from '../../store/ducks/_Jobs/actions'
import {
  FILTERED,
  PERSIST_INITIAL,
  RESET,
  APPLY_OPTIONS,
  RESET_OPTIONS,
} from '../../store/ducks/_Filter/actions'

// ------------ Components ------------
import {
  AppCard,
  LayoutGrid,
  LayoutContainer,
  AppAlert,
  Filters,
  Links,
  TheHeader,
  Creds,
} from '../../components'

// ------------ Hooks ------------
import useOutsideClick from '../../hooks/useOutsideClick'
import useFuncAtEndOfScroll from '../../hooks/useFuncAtEndOfScroll'

// ------------ Styles ------------
import * as CSS from './styled'

const Template = ({ route, repo }) => {
  // ------------ Other ------------
  const currentRepo = repo
  const router = useRouter()
  const filterRef = useRef(null)

  // ------------ Redux ------------
  const dispatch = useDispatch()
  const { cards, selected, applyed } = useSelector(({ Filter }) => Filter)
  const { data, loading, error, filteredData, lastPage } = useSelector(
    ({ Jobs }) => Jobs
  )

  // Layout organization
  const [renderLoadMoreBtn, setRenderLoadMoreBtn] = useState(false)
  const [filterVisibility, setFilterVisibility] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [linksVisibility, setLinksVisibility] = useState(false)
  const [renderLinks, setRenderLinks] = useState(false)
  const [renderCreds, setRenderCreds] = useState(false)
  const [credsVisibility, setCredsVisibility] = useState(false)
  const [renderCloseIcon, setRenderCloseIcon] = useState(false)
  const [noAnimation, setNoAnimation] = useState(true)
  const [loadButtonText, setLoadButtonText] = useState('Mais vagas')

  // Hooks
  filterRef && useOutsideClick(filterRef.current, handleOutsideClick)

  // Custom hooks
  useFuncAtEndOfScroll(() => {
    if (!applyed.length && windowWidth > 1001) {
      loadAnotherPage()
    }
  }, [])

  // Effects
  useEffect(() => {
    if (data.length === 0) dispatch(FETCHING(currentRepo))
    dispatch(PERSIST_INITIAL(intialState.cards))
  }, [])

  useEffect(() => {
    selected.length < 1 ? dispatch(FILTERED_DATA(data)) : cardsFilter()
  }, [data, applyed])

  // REFACTOR ------------
  useEffect(() => {
    setLoadButtonText('Mais vagas')
  }, [filteredData.length])

  useEffect(() => {
    setTimeout(() => {
      windowWidth <= 1001 && setRenderLoadMoreBtn(true)
    }, 1500)
  }, [windowWidth])

  // Page funcs
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }

  async function loadAnotherPage() {
    const nextPage = lastPage + 1

    setLoadButtonText('Carregando...')
    dispatch(GET_ANOTHER_PAGE(nextPage, currentRepo))
    dispatch(UPDATE_CURRENT_PAGE_VALUE(nextPage))
  }

  function handleActive(index, optionKey, optionText) {
    dispatch(FILTERED(index, optionKey, optionText))
  }

  function handleFilterReset() {
    dispatch(RESET())
    dispatch(RESET_OPTIONS())
  }

  function applyOptions() {
    dispatch(APPLY_OPTIONS([...selected]))
  }

  function cardsFilter() {
    let arr = []
    data.forEach(el => {
      el.job.labels.forEach(label => {
        const ver = applyed.includes(label.name)

        if (ver) {
          return arr.push(el)
        }
      })
    })

    dispatch(FILTERED_DATA(arr))
  }

  function openJob(jobId) {
    const jobsInfo = data.find(({ job }) => job.id === jobId)
    router.push(`/${route}/${repo}/${jobsInfo.job.id}`)
  }

  function handleOutsideClick() {
    setFilterVisibility(false)
    applyOptions()
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
      <Head>
        <title>Diobis | {repo}</title>
      </Head>
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
      <CSS.Section>
        <Filters
          noAnimation={noAnimation}
          ref={filterRef}
          visible={filterVisibility}
          cards={cards}
          onReset={handleFilterReset}
          onApply={applyOptions}
          handleSelected={handleActive}
          handleVisibility={() => {
            if (noAnimation) setNoAnimation(false)

            setFilterVisibility(oldState => !oldState)
          }}
        />
        <LayoutContainer>
          {/* if error */}
          {!loading && error.active && (
            <CSS.Error>
              <AppAlert type="warning">
                <p>
                  <b>{error.code}</b> | {error.message}
                </p>
              </AppAlert>
            </CSS.Error>
          )}

          {/* Data is loading */}
          {loading && (
            <LayoutGrid>
              {Array.apply(null, Array(12)).map((n, index) => (
                <AppCard loading key={index} />
              ))}
            </LayoutGrid>
          )}

          {/* Data loaded */}
          {!loading && !error.active && typeof filteredData !== 'undefined' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <LayoutGrid>
                {filteredData.map((job, index) => {
                  return (
                    <AppCard
                      data={job}
                      key={index}
                      onSave={() => {}}
                      onSelect={() => openJob(job.job.id)}
                    />
                  )
                })}
              </LayoutGrid>
              {renderLoadMoreBtn && (
                <button
                  onClick={() => loadAnotherPage()}
                  style={{
                    width: '50%',
                    maxWidth: '200px',
                    fontSize: '0.9rem',
                    fontWeight: '400',
                    color: '#ffffff',
                    backgroundColor: '#3B82F6',
                    padding: '10px',
                    borderRadius: '10px',
                  }}
                >
                  {loadButtonText}
                </button>
              )}
            </div>
          )}
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
        </LayoutContainer>
      </CSS.Section>
    </>
  )
}

export default Template
