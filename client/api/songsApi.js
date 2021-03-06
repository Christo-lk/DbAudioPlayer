import request from 'superagent'

export function getSongs () {
  return request.get('/api/v1/getsongs')
    .then(res => res.body)
}

export function getIndSong (id) {
  return request.get(`/api/v1/getindsong/${id}`)
    .then(res => res.body)
}

export function addSong (song) {
  return request.post('/api/v1/addsong')
    .send(song)
    .then(res => res.body)
}

export function uploadFile (song) {
  return request.post('/api/v1/uploadfile')
    .send(song)
    .then(() => console.log('i tried'))
}

export function deleteSong (id) {
  return request.delete(`/api/v1/deletesong/${id}`)
    .then(res => res.body)
}

export function updateIsLiked (isLiked) {
  return request.patch('/api/v1/updateIsLiked')
    .send(isLiked)
    .then(res => res.body)
}
