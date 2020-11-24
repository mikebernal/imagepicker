import axios from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper'

// const axiosConfig = {
//   baseURL: 'https://api.unsplash.com/photos/',
//   auth: {
//       username: process.env.UNSPLASH_CLIENT_ID,
//       password: process.env.UNSPLASH_CLIENT_SECRET
//   }
// }

export async function getImages() {
    const API_ROOT  = `https://api.unsplash.com/photos`
    if (isServer()) {
        return await fetch(API_ROOT + `/random?client_id=` + process.env.CLIENT_ID + `&count=10`).then((res) => res.json())
    }
}

// export function getImages() {
//     const query 
//     if(isServer()) {
//       return axios.get(`api_endpoint_here`, axiosConfig)
//     } 


//     return axiosGetCancellable(`/random&count=10`)
// }

// export function getImage(id) {
//   return axios.get(`repositories/${id}`, axiosConfig)
// }

// export function getProfile(username) {
//   return axios.get(`users/${username}`, axiosConfig)
// }

function isServer() {
  return typeof window === 'undefined'
}