import React from 'react'
import { Container, Slider, Card, Button } from './OthersJobs.styled'
import { AppLabel } from '../../../../../../components'
import { useSelector } from 'react-redux'

const OthersJobs = ({ route, repo, user }) => {
  const OtherJobs = useSelector(({ Jobs }) => Jobs.otherJobs)

  return (
    <Container>
      <Slider>
        {OtherJobs.slice(1).map(({ job }) => {
          return (
            <Card key={job.id}>
              <p>{job.title}</p>
              <div tw="mb-4" className="labels">
                {job.labels.slice(0, 6).map(label => (
                  <AppLabel
                    key={label.name}
                    value={label.name}
                    color={label.color}
                  />
                ))}
              </div>

              <Button>
                <a href={`/${route}/${repo}/${job.id}`}>Abrir a vaga</a>
              </Button>
            </Card>
          )
        })}
      </Slider>
    </Container>
  )
}

export default OthersJobs
