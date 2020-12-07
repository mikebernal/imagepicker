// Third party libraries
import axios from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper'

// Helpers
import { isServer } from '../helpers/server.helper'

const axiosConfig = {
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: process.env.UNSPLASH_CLIENT_ID
  }
}

const client_id = process.env.UNSPLASH_CLIENT_ID

// -----------------------------------------------------------------
// ------------------------Server-side------------------------------
// -----------------------------------------------------------------

/**
 * GET /photos/:id
 * Used for fetching individual image and feed data to /photo/[id] route
 * @param {*} id 
 */
export async function getImage(id) {
  if (isServer()) {
      return await axios.get(`photos/${id}?client_id=` + client_id, axiosConfig)
  }
}

/**
 * Used for fetching the initial images data that needs to be rendered in the index route
 */
export async function getInitialImages() {
    if (isServer()) {
        return await axios.get(`photos/random?client_id=` + client_id + `&count=10`, axiosConfig)
    }

    return axiosGetCancellable(`api/photo`)
}

/**
 * Used for fetching data when user scroll down to the list of images
 * @param {*} key 
 * @param {*} nextId 
 */
export async function getSubsequentImages(key, nextId = 10) {
  const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=${client_id}&count=${nextId}`)
  return data
}

/**
 * GET /users/:username
 * Used to fetch profile data and feed it to profile/[id] route
 * @param {*} username 
 */
export async function getProfile(username) {
    if (isServer()) {
        return await axios.get(`users/${username}?client_id=` + client_id, axiosConfig)
    }
}
