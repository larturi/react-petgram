import React, { Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { Logo } from './components/Logo'
import { Nabvar } from './components/Navbar'
import { GlobalStyles } from './GlobalStyles'
import Context from './Context'
import { NotFound } from './pages/NotFound'

const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const LoginUser = React.lazy(() => import('./pages/LoginUser'))
const RegisterUser = React.lazy(() => import('./pages/RegisterUser'))

export const App = () => {
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
