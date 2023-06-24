import React from "react"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </>
  )
}
