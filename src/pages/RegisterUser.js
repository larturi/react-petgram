import React from 'react'
import { Link } from '@reach/router'
import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { useRegisterMutation } from '../containers/RegisterMutation'

export const RegisterUser = () => {
  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmitRegister = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables }).then(activateAuth)
          }

          const errorMsgRegister = errorRegister && 'El usuario ya existe'

          return (
            <>
              <UserForm
                disabled={loadingRegister}
                error={errorMsgRegister}
                title='Registrarse'
                onSubmit={onSubmitRegister}
              />
              <div className='link-container'>
                <p>Ya tienes usuario? </p>
                <Link to='/login'>Ingresar</Link>
              </div>
            </>
          )
        }
    }
    </Context.Consumer>
  )
}
