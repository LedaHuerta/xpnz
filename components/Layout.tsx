import React from 'react'

import Header from '@Layout/Header'
import Footer from './Layout/Footer'

import { ILayout } from 'interfaces/Layout'
import Head from 'next/head'


const Layout = ({children}: ILayout) => {
  return (
    <>
    <Head>
      <title>xpnz</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className='main-content'>
    {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout