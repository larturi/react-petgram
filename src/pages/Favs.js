import React from 'react'
import { GetFavoritesWithQuery } from '../containers/GetFavoritesWithQuery'

export const Favs = () => {
  return (
    <>
      <h1 className='title'>Favoritos</h1>
      <GetFavoritesWithQuery />
    </>
  )
}
