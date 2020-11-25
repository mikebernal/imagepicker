// React Component & Hooks
import { useState } from 'react'

// Next component
import Head from 'next/head'

// Custom component
import Header from '../components/Header'
import ImageList from '../components/ImageList'

// Services
import { getImages } from '../services/unsplashService'

// Helpers
import { SITE_TITLE } from '../../src/helpers/site-title.helper'


export default function Home(props) {
  const [images, setImages] = useState([props.images])
  return (
    <div className="container">
      <Head>
        <title>{ SITE_TITLE }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <ImageList images={images}/>

    </div>
  )
}

export async function getServerSideProps(context) {
  const images = await getImages()
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
