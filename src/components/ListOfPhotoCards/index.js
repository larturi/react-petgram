import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ photos }) => {
  return (
    <ul style={{ marginBottom: '40px' }}>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
