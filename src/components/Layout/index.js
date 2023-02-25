import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title } from './styles'

export const Layout = ({ children, title, subtitle, hideTitle = false }) => {
  return (
    <>
      <Helmet>
        {title && <Title>Petgram 🐶 | {title}</Title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>

      <Div>
        {title && !hideTitle && <h1 className='title'>{title}</h1>}
        {children}
      </Div>
    </>
  )
}
