import React from 'react'
import { Layout } from '../components/Layout'
import { GetFavoritesWithQuery } from '../containers/GetFavoritesWithQuery'

export default () => {
  return (
    <>
      <Layout title='Favoritos' subtitle='Aqui puedes encontrar las fotos que has marcado como favoritas'>
        <GetFavoritesWithQuery />
      </Layout>
    </>
  )
}
