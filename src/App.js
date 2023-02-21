import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { Nabvar } from './components/Navbar'
import { GlobalStyles } from './GlobalStyles'
import { Favs, User, Detail, Home, LoginUser, RegisterUser } from './pages'
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
                  <LoginUser path='/favs' />
                  <LoginUser path='/user' />
                  <LoginUser path='/login' />
                  <RegisterUser path='/favs' />
                  <RegisterUser path='/user' />
                  <RegisterUser path='/register' />
                </Router>
                )
        }
      </Context.Consumer>

      <Nabvar />
    </>
  )
}
