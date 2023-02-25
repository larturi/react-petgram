import React from 'react'
import { Router, Redirect } from '@reach/router'
import { Logo } from './components/Logo'
import { Nabvar } from './components/Navbar'
import { GlobalStyles } from './GlobalStyles'
import { Favs, User, Detail, Home, LoginUser, RegisterUser } from './pages'
import Context from './Context'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyles />

      <Context.Consumer>
        {
          ({ isAuth }) =>
            <Router>
              <NotFound default />

              <Home path='/' />
              <Home path='/pet/:categoryId' />
              <Detail path='/detail/:detailId' />

              <LoginUser path='/login' />
              <RegisterUser path='/register' />

              {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
              {!isAuth && <Redirect noThrow from='/user' to='/login' />}

              <Favs path='/favs' />
              <User path='/user' />
            </Router>
    }
      </Context.Consumer>

      <Nabvar />
    </>
  )
}
