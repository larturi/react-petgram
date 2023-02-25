import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export default ({ detailId }) => {
  return (
    <Layout title='Fotografia'>
      <PhotoCardWithQuery detailId={detailId} />
    </Layout>
  )
}
