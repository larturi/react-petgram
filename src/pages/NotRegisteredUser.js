import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { useRegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error } = useRegisterMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables }).then(activateAuth)
          }

          const errorMsg = error && 'El usuario ya existe'

          return (
            <>
              <UserForm
                disabled={loading}
                error={errorMsg}
                title='Registrarse'
                onSubmit={onSubmit}
              />
              <UserForm
                title='Iniciar sesion'
                onSubmit={activateAuth}
              />
            </>
          )
        }
    }
    </Context.Consumer>
  )
}
