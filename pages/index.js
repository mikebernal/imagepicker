// Next component
import Head from 'next/head'
import Image from 'next/image'

export default function Home({ images }) {

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Image Picker
        </h1>

        <p className="description">
          Using <code>getServerSideProps()</code> and Unsplash API
        </p>

        <div className="grid">
          {
            // Display list of random images
            images.map((img) => (
              <div style={{ width: "50%" }} key={img.name} >
                <img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} />
              </div>
            ))
          }

        </div>
      </main>

    </div>
  )
}

/**
 * Single Image
 * Pre-render page on each request using the returned data 
 */
// export async function getServerSideProps(context) {
//   const cid1 = `qpcqED-8j9HWAwrzwVNBYhjAK6VteN5WlRq9CxY0IaA`
//   const cid2 = `_4gO7XdYTRkaz7rXglkVuxRQIydkx1P-QcZYUk_-Tjo`

//   const randomSet   = `https://api.unsplash.com/photos?page=1&client_id=`
//   const singleImage = `https://api.unsplash.com/photos/random?&client_id=`

//   const res    = await fetch(singleImage + cid1)
//   const images = await res.json()
//   const url    = images.urls.small
//   console.log(images)

//   if (!images) {
//     return {
//       notFound: true
//     }
//   }

//   return { props: { images, url } }
// }

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
