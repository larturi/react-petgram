import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })

  if (error) return <p>Internal Server Error</p>
  if (loading) return <p>Loading...</p>

  return (
    <PhotoCard {...data.photo} />
  )
}
