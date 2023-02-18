import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
  }
`

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: {
      categoryId
    }
  })

  if (error) return <p>Internal Server Error</p>
  if (loading) return <p>Loading...</p>

  return (
    <ListOfPhotoCards {...data.photos} />
  )
}
