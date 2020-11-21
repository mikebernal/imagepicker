// Next component
import Head from 'next/head'
import Image from 'next/image'
import Date from '../components/date'

export const SITE_TITLE = 'Image Picker'

export default function Home({ images }) {

  return (
    <div className="container">
      <Head>
        <title>{ SITE_TITLE }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{ SITE_TITLE } </h1>

        <p className="description">
          Using <code>getServerSideProps()</code> and Unsplash API
        </p>

        <div className="grid">

            {/* Display list of random images */}
            {/* Use next/image instead and layout fill inside a div with a width adn height set. */}
              {
                images.map((img) => (
                  <div className="card" style={{ position: "relative", width: "auto", minHeight: "450px" }} key={img.name} >
                    <p>Published at: <Date dateString={img.created_at} /></p>d
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

/**
 * Get random set of images
 */
export async function getServerSideProps(context) {
  const cid1 = `qpcqED-8j9HWAwrzwVNBYhjAK6VteN5WlRq9CxY0IaA`
  const cid2 = `_4gO7XdYTRkaz7rXglkVuxRQIydkx1P-QcZYUk_-Tjo`

  const randomSet   = `https://api.unsplash.com/photos?page=1&client_id=`
  const singleImage = `https://api.unsplash.com/photos/random?&client_id=`

  const res    = await fetch(randomSet + cid1)
  const images = await res.json()

  console.log(images)

  if (!images) {
    return {
      notFound: true
    }
  }

  return { props: { images } }
}
