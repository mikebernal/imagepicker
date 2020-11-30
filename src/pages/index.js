import React, { useState } from 'react'

// Next component
import Head from 'next/head'

// Custom component
import Header from '../components/Header'
import Loader from '../components/Loader'
import ImageList from '../components/ImageList'

// Third party libraries
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

// Services
import { getImages } from '../services/unsplashService'

// Helpers
import { SITE_TITLE } from '../../src/helpers/site-title.helper'

 
export default function Posts() {
  const [start, setStart] = useState(0)

  const {
    status,
    data,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    error,
  } = useInfiniteQuery('posts', 
    async (key, nextId = 12) => {
      const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_CLIENT_ID2}&count=${nextId}`)
      return data
    }
  )

  function getMore() {
    const newStart = start + 12
    setStart(newStart)
    fetchMore(newStart)
  }

  return (
    <div className="container mb2">
      <Head>
        <title>{ SITE_TITLE }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {
        status === 'loading' ? (
         <div className="center">
            <Loader />
         </div> 
        ) : status === 'error' ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            <ImageList images={data.flat()}/>
            <div className="center">
              <button onClick={() => getMore()}>Load more</button>
              <div>{isFetching && !isFetchingMore ? <Loader /> : null}</div>
            </div>
          </>
        )
      }

    </div>
  )
}

// export async function getServerSideProps(context) {
//   const images = await getImages()
//   if (!images) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       images: images.data,
//     }
//   }
// }
