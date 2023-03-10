import React from 'react'
import { MdHome, MdFavorite, MdPersonOutline } from 'react-icons/md'
import { Link, Nav } from './styles'

const SIZE = '32px'

export const Nabvar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdFavorite size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
