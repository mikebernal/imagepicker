// React Component & Hooks
import React, { useState } from 'react'

// Next component
import Head from 'next/head'

// Custom component
import Header from '../components/Header'
import ImageList from '../components/ImageList'

// Third party libraries
import { axios } from 'axios'
import { useInfiniteQuery } from 'react-query'

// Services
import { getImages } from '../services/unsplashService'

// Helpers
import { SITE_TITLE } from '../../src/helpers/site-title.helper'


export default function Home() {
  // const [images, setImages] = useState([props.images])
  const [start, setStart] = useState(0)


  const {
    status,
    data,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    error,
  } = useInfiniteQuery('images', 
    async (key, nextId = 10) => {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=HfYrnuq7MHi2vbUK0qhFWe7Gvad97sRKZMxhSTBuOgM&count=${nextId}`
      )

      return data
    })

  function getMore() {
    const newStart = start + 10
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
      {/* <ImageList images={images}/> */}
      {

        status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'error' ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            {
              data.map((images, i) => (
                // console.log(data)
                  <React.Fragment key={i}>
                    {images.map(image => (
                      // <ImageListItem key={img.id} img={img}/>
                      <p key={image.id}>{image.id}</p>
                    ))}
                </React.Fragment>
              ))
            }

            <button onClick={() => getMore()}>Load more</button>
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
