import moment from 'moment'

moment.locale('pt-br')

function toRelative(date) {
  return moment(date).fromNow()
}

export default { toRelative }
