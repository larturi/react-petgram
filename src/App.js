import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { GlobalStyles } from './GlobalStyles'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <Logo />
      <GlobalStyles />

      {
        detailId
          ? (<PhotoCardWithQuery id={detailId} />)
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
            )
      }
    </>
  )
}
