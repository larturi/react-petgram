import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const query = gql`
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
  const { loading, error, data } = useQuery(query, {
    variables: {
      categoryId
    }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ListOfPhotoCards {...data.photos} />
  )
}
