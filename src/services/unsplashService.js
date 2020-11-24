import axios from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper'

const axiosConfig = {
  baseURL: 'https://api.unsplash.com/photos/'
}

export async function getImages() {
    if (isServer()) {
        return await axios.get(`random?client_id=` + process.env.UNSPLASH_CLIENT_ID + `&count=10`, axiosConfig)
    }

    return axiosGetCancellable(`api/search`)
}

function isServer() {
  return typeof window === 'undefined'
}
