import { useState, useEffect } from 'react'

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

  useEffect(function mount() {

    function onScroll() {
      console.log(window.scrollY);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            getMore()
        }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

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
      const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_CLIENT_ID5}&count=${nextId}`)

      return data
    }, {
      staleTime: Infinity
    }
  )

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
              {/* <button onClick={() => getMore()}>Load more</button> */}
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
