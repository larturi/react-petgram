import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm title='Registrarse' onSubmit={activateAuth} />
            <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
