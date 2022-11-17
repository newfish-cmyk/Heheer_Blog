import React from 'react'
// import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <title>Heheer's blog</title>
      <Header />
      <div className='text-3xl text-gray-300 p-8'>
        Hi, there 👋
      </div>
    </>
  )
}
