import { useState, useEffect } from 'react'
import Head from 'next/head'

import styles from 'styles/Home.module.css'
import { loginWithGitGub, onAuthStateChanged } from 'firebase/client'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'
import Logo from 'components/Icons/Logo'

export default function Home () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitGub()
      .then((response) => {
        // const { username, avatar, blog } = response
        setUser(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Logo width="100" />
          <h1 className={styles.title}>Devter</h1>
          <h2 className={styles.subtitle}>
            Talk about development <br /> with develepers 👨🏻‍💻👩🏻‍💻
          </h2>
          <div className={styles.login}>
            {user === null ? (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill="#fff" />
                Login width GitHub
              </Button>
            ) : (
              <Avatar src={user.avatar} alt={user.username} text={user.username} />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
