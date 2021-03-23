import request from 'superagent'

export function getSongs () {
  return request.get('/api/v1/getsongs')
    .then(res => res.body)
}
