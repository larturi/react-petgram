import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsWithQuery } from '../containers/ListOfPhotoCardsWithQuery'

export const Home = ({ categoryId }) => {
  return (
    <>
      <Layout title='Petgram: Tu App de fotos de mascotas' subtitle='En Petgram puedes encontrar fotos de animales y subir las fotos de tus mascotas' hideTitle>
        <ListOfCategories />
        <ListOfPhotoCardsWithQuery categoryId={categoryId} />
      </Layout>
    </>
  )
}
