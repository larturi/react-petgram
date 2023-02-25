import React from 'react'
import { Nabvar } from '../components/Navbar'
import { GlobalStyles } from '../GlobalStyles'

export const NotFound = () => {
  return (
    <>
      <GlobalStyles />
      <h3 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh'
      }}
      >Pagina Inexistente
      </h3>
      <Nabvar />
    </>
  )
}
