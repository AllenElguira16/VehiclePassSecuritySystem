import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import Default from './Default';
import { Route } from 'react-router-dom';

export default () => {
  return (
    <>
      <Navigation />
      <main style={{minHeight: 750}}>
        <Route path="/" component={Default}/>
      </main>
      <Footer />
    </>
  )
}