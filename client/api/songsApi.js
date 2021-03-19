import request from 'superagent'

export function getSongs () {
  return request.get('/api/v1/songs')
    .then(res => res.body)
}
