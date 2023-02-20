import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { Nabvar } from './components/Navbar'
import { GlobalStyles } from './GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyles />

      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Nabvar />
    </>
  )
}
