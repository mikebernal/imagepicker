import { useState, useEffect } from 'react'

// Next component
import Head from 'next/head'

// Custom component
import Header from '../components/Header'
import Loader from '../components/Loader'
import ImageList from '../components/ImageList'

// Third party libraries
import { useInfiniteQuery } from 'react-query'

// Services
import { getInitialImages, getSubsequentImages } from '../services/unsplashService'

// Helpers
import { SITE_TITLE } from '../../src/helpers/site-title.helper'


export default function Posts(props) {
  const [start, setStart] = useState(0)

  // Add local json file as a fallback if something went wrong or use getSubsequentImage
  const imagesQuery = useInfiniteQuery(
    'images', 
    getSubsequentImages, {
    staleTime: Infinity,
    initialData: props?.images || getSubsequentImages,
  })

  function getMoreImages() {
    const newStart = start + 10
    setStart(newStart)
    imagesQuery.fetchMore(newStart)
  }

  useEffect(function mount() {

    function onScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          getMoreImages()
        }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    }
  })

  return (
    <div className="container mb2">
      <Head>
        <title>{ SITE_TITLE }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
      {
        imagesQuery.status === 'loading' ? (
         <div className="center">
            <Loader />
         </div> 
        ) : imagesQuery.status === 'error' ? (
          <p>Error: {imagesQuery.error.message}</p>
        ) : (
          <>
            <ImageList images={imagesQuery.data.flat()}/>
            <div className="center">
              <div>{imagesQuery.isFetching ? <Loader /> : null}</div>
            </div>
          </>
        )
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  const images = await getInitialImages()
  if (!images) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      images: images.data,
    }
  }
}
