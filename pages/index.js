import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
          <Image
            src="/city.jfif"
            alt="Picture of the author"
            width={500}
            height={500}
          />

          <Image
            src="/garden.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />

          <Image
            src="/tiger.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />

          <Image
            src="/food.jfif"
            alt="Picture of the author"
            width={500}
            height={500}
          />

          <Image
            src="/kobe.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />

          <Image
            src="/travel.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

    </div>
  )
}
