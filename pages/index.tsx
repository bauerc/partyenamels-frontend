import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import pePinkSmall from '../public/pe-pink-small.png'
import peBlueSmall from '../public/pe-blue-small.png'
import peGreenSmall from '../public/pe-green-small.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Party Enamels - Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Party!
        </h1>

        <p className={styles.description}>
          <Image src={pePinkSmall} alt="Party Enamels Pink" />
          <Image src={peGreenSmall} alt="Party Enamels Green" />
          <Image src={peBlueSmall} alt="Party Enamels Blue" />
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About Us &rarr;</h2>
              <p>Learn about the Party Enamels team!</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <Link href="/">
            <a className={styles.card}>
              <h2>Cool Feature&rarr;</h2>
              <p>Create some cool feature and put it here.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src={peGreenSmall} alt="Party Enamels Green" width={42} height={36} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
