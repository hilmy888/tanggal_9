import Axios from 'axios'
import Cookie from 'js-cookie'

const api = Axios.create({
  baseURL: 'http://127.0.0.1:3000/v1',
})

export function userRegister(data) {
  return api.post('/register', data)
    .then(
      (response) => Cookie.set('Token', response.data.accessToken),
      (e) => console.log(e),
    )
}
export function userLogin(data) {
  return api.post('/login', data)
    .then(
      (response) => Cookie.set('Token', response.data.accessToken),
    )
}

export function createPost(data) {
  return api.post('/posts', data, {
    headers: {
      Authorization: `Bearer ${Cookie.get('Token')}`,
    },
  })
    .then(
      (response) => console.log(response.data),
    )
}

export function getPostList() {
  return api.get('/posts', {
    headers: {
      Authorization: `Bearer ${Cookie.get('Token')}`,
    },
  })
    .then(
      (response) => response.data,
    )
}

export function getPostDetail(id) {
  return api.get(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookie.get('Token')}`,
    },
  })
    .then(
      (response) => response.data,
    )
}

export function postDelete(id) {
  return api.delete(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookie.get('Token')}`,
    },
  })
    .then(
      (response) => response.data,
    )
}
