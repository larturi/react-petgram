import React, { createContext, useState } from 'react'
import { navigate } from '@reach/router'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const [activeUser, setActiveUser] = useState(() => {
    return JSON.parse(window.sessionStorage.getItem('user'))
  })

  const value = {
    isAuth,
    activeUser,
    activateAuth: (token, user) => {
      setIsAuth(true)
      setActiveUser(user)
      window.sessionStorage.setItem('token', token)
      window.sessionStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    },
    removeAuth: () => {
      setIsAuth(false)
      setActiveUser(null)
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('user')
      navigate('/login')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
