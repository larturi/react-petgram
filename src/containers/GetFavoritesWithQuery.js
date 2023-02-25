import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const GetFavoritesWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })

  if (error) return <p>Internal Server Error</p>
  if (loading) return <p>Loading...</p>

  const { favs } = data

  return <ListOfFavs favs={favs} />
}
