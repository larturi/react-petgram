import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { useLoginMutation } from '../containers/LoginMutation'

export const LoginUser = () => {
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()
  const { activateAuth } = useContext(Context)

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsgLogin = errorLogin && 'Las credenciales son incorrectas'

  return (
    <>
      <UserForm
        disabled={loadingLogin}
        error={errorMsgLogin}
        title='Iniciar sesion'
        onSubmit={onSubmitLogin}
      />
      <div className='link-container'>
        <p>No tienes usuario? </p>
        <Link to='/register'>Registrate</Link>
      </div>
    </>
  )
}
