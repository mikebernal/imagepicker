// React Component & Hooks
import { useState, useEffect } from 'react'

// Next component
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Custom component
import Date from '../components/Date'
import Header from '../components/Header'

// Services
import { getImages } from '../services/unsplashService'

// Helpers
import { SITE_TITLE } from '../../src/helpers/site-title.helper'


export default function Home({ images }) {
  const [unsplashImages, setImages] = useState([])

  return (
    <div className="container">
      <Head>
        <title>{ SITE_TITLE }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div className="grid">
          {
            images.map((img) => (
              <div key={img.id} className="card" style={{ position: "relative", width: "auto", minHeight: "450px" }}  >
                <p>Published at: <Date dateString={img.created_at} /></p>
                {/* <img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/> */}
                  <Link href={`/photos/${img.id}`}>
                    <a><Image src={img.urls.small} alt={img.description} layout="fill" /></a>
                  </Link>
              </div>
            ))
          }
        </div>
      </main>

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

  return { props: { images } }
}
