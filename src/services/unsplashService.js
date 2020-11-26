import axios from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper'

const axiosConfig = {
  baseURL: 'https://api.unsplash.com/'
}

// GET /photos/:id
export async function getImage(id) {
  if (isServer()) {
      return await axios.get(`photos/${id}?client_id=` + process.env.UNSPLASH_CLIENT_ID, axiosConfig)
  }
}

// GET /photos/random
// params count=10
export async function getImages() {
    if (isServer()) {
        return await axios.get(`photos/random?client_id=` + process.env.UNSPLASH_CLIENT_ID + `&count=20`, axiosConfig)
    }

    return axiosGetCancellable(`api/search`)
}

// GET /users/:username
export async function getProfile(username) {
    if (isServer()) {
        return await axios.get(`users/${username}?client_id=` + process.env.UNSPLASH_CLIENT_ID, axiosConfig)
    }
}

function isServer() {
  return typeof window === 'undefined'
}
