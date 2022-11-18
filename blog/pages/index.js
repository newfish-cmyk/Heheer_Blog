import React from 'react'
// import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <title>Heheer's blog</title>
      <Header />
      <div className='text-xl text-gray-400 p-8'>
        <p>👋 Hi, there! I'm heheer, a front-end enthusiast.</p>

      </div>
    </>
  )
}
