import PropTypes from 'prop-types'
import * as CSS from './AppCard.styled'

const AppCard = ({ data, onSave, onSelect, loading }) => {
  return (
    <>
      {loading && <CSS.Card loading={String(loading)} />}

      {!loading && (
        <CSS.Card id={String(data.job.id)}>
          {/* card header */}
          <CSS.Header>
            <img src={data.user.avatar} alt={data.user.name} />
            <span>
              <p>{data.user.name}</p>
              <p>{data.job.createdAt}</p>
            </span>
          </CSS.Header>

          {/* card body */}
          <CSS.Body>
            <h4>{data.job.title}</h4>
            <CSS.Labels>
              {data.job.labels?.map(label => (
                <CSS.Label
                  key={label.id}
                  color={label.color}
                  value={label.name}
                />
              ))}
            </CSS.Labels>
          </CSS.Body>

          {/* card footer */}
          <CSS.Footer>
            <button type="button" onClick={() => onSelect()}>
              Mais detalhes
            </button>
          </CSS.Footer>
        </CSS.Card>
      )}
    </>
  )
}

AppCard.propTypes = {
  /** Receive all data to render component */
  data: PropTypes.shape({
    job: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      createdAt: PropTypes.string,
      labels: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          name: PropTypes.string,
          color: PropTypes.string,
        })
      ),
    }),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  }),
  /** Receive a callback function to execute onSave action */
  onSave: PropTypes.func,
  /** Receive a callback function to execute onSelect action */
  onSelect: PropTypes.func,
  /** Receive a Boolean to set component in loading state */
  loading: PropTypes.bool,
}

export default AppCard
