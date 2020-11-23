// React Component & Hooks
import { useEffect } from 'react'

// Next component
import Head from 'next/head'
import Image from 'next/image'

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

  useEffect(function trackScreenYPos() {
    window.addEventListener("scroll", handleScroll)

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
            images.map((img) => (
              <div key={img.id} className="card" style={{ position: "relative", width: "auto", minHeight: "450px" }}  >
                <p>Published at: <Date dateString={img.created_at} /></p>
                {/* <img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/> */}
                <Image src={img.urls.small} alt={img.description} layout="fill" />
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
