import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { useRegisterMutation } from '../containers/RegisterMutation'
import { useLoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmitRegister = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables }).then(activateAuth)
          }

          const onSubmitLogin = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(activateAuth)
          }

          const errorMsgRegister = errorRegister && 'El usuario ya existe'
          const errorMsgLogin = errorLogin && 'Las credenciales son incorrectas'

          return (
            <>
              <UserForm
                disabled={loadingRegister}
                error={errorMsgRegister}
                title='Registrarse'
                onSubmit={onSubmitRegister}
              />
              <UserForm
                disabled={loadingLogin}
                error={errorMsgLogin}
                title='Iniciar sesion'
                onSubmit={onSubmitLogin}
              />
            </>
          )
        }
    }
    </Context.Consumer>
  )
}
