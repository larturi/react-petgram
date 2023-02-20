import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { Nabvar } from './components/Navbar'
import { GlobalStyles } from './GlobalStyles'
import { Favs, User, Detail, Home, NotRegisteredUser } from './pages'
import Context from './Context'

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

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                )
              : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
                )
        }
      </Context.Consumer>

      <Nabvar />
    </>
  )
}
