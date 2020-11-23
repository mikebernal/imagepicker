// React Component & Hooks
import { useState, useEffect } from 'react'

// Next component
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Custom componenet
import { Date, SITE_TITLE } from '../components/Helpers'
import Header from '../components/Header'

/**
 * Get 10 random images from unsplash API
 * API Schema: https://api.unsplash.com/photos/random?client_id=YOUR_ID&count=10
 */
export async function fetchImages() {
  const API_ROOT  = `https://api.unsplash.com/photos`
  return await fetch(API_ROOT + `/random?client_id=` + process.env.CLIENT_ID + `&count=10`).then((res) => res.json())
}

export default function Home({ images }) {

  const [unsplashImages, setImages] = useState([])

  useEffect(function trackScreenYPos() {
    window.addEventListener("scroll", handleScroll)
    setImages(images)

    return function cleanup()  {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [images])

  function handleScroll() {

    return (
      window.onscroll = function(event) {
        if ((window.innerHeight + window.scrollY)  >= document.body.scrollHeight) {
         alert('it works')
         // Fetch new image here?
        }
      }
    )

  }

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
            unsplashImages.map((img) => (
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
  const images = await fetchImages()

  if (!images) {
    return {
      notFound: true
    }
  }

  return { props: { images } }
}
