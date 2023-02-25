import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const { removeAuth, activeUser } = useContext(Context)
  return (
    <div>
      <Layout>
        <h3 style={{ textAlign: 'center' }}>User: {activeUser?.email}</h3>
        <div style={{ padding: '20px' }}>
          <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
        </div>
      </Layout>
    </div>
  )
}
