import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth, activeUser } = useContext(Context)
  return (
    <div>
      <h1 className='title'>User: {activeUser?.email}</h1>
      <div style={{ padding: '20px' }}>
        <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
      </div>
    </div>
  )
}
