//React
import React, { useState } from 'react'

// Third party libraries
import axios from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper'

const axiosConfig = {
  baseURL: 'https://api.unsplash.com/'
}

// GET /photos/:id
export async function getImage(id) {
  if (isServer()) {
      return await axios.get(`photos/${id}?client_id=` + process.env.UNSPLASH_CLIENT_ID2, axiosConfig)
  }
}

// Get random images using react query's infinite queries
export async function getInfiniteImages() {
  const [start, setStart] = useState(0)

  function getMore() {
    const newStart = start + 10
    setStart(newStart)
    fetchMore(newStart)
  }

  const {
    status,
    data,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    error,
  } = useInfiniteQuery('posts', 
    async (key, nextId = 10) => {

    if (isServer()) {
      const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=HfYrnuq7MHi2vbUK0qhFWe7Gvad97sRKZMxhSTBuOgM&count=${nextId}`)
      return data
    }
  
    }
  )

  if (isServer()) {
      return await axios.get(`photos/random?client_id=` + process.env.UNSPLASH_CLIENT_ID2 + `&count=20`, axiosConfig)
  }

  return axiosGetCancellable(`api/search`)
}


// GET /photos/random
// params count=10
export async function getImages() {
    if (isServer()) {
        return await axios.get(`photos/random?client_id=` + process.env.UNSPLASH_CLIENT_ID2 + `&count=20`, axiosConfig)
    }

    return axiosGetCancellable(`api/search`)
}

// GET /users/:username
export async function getProfile(username) {
    if (isServer()) {
        return await axios.get(`users/${username}?client_id=` + process.env.UNSPLASH_CLIENT_ID2, axiosConfig)
    }
}

function isServer() {
  return typeof window === 'undefined'
}
