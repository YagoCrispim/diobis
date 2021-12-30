import DateConvert from '../common/DateConvert'

export function toError(data = {}) {
  return { message: data.message, status: data.status }
}

export function ObjectToJob(data = {}) {
  return {
    user: {
      id: data.user.id,
      name: data.user.login,
      avatar: data.user.avatar_url,
    },
    job: {
      id: data.number,
      createdAt: DateConvert.toRelative(data.created_at),
      title: data.title,
      labels: data.labels.map(label => ({
        id: label.id,
        name: label.name,
        color: `#${label.color}`,
      })),
      markdown: data.body,
    },
  }
}

export function ArrayToJob(data = []) {
  return data.map(ObjectToJob)
}
