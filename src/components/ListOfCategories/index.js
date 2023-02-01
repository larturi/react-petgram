/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react'
import { getApiBaseUrl } from '../../hooks/useConfig'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  const urlApi = getApiBaseUrl()

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch(`${urlApi}/categories`)
      const data = await response.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  // useEffect(() => {
  //   fetch(`${urlApi}/categories`)
  //     .then(res => res.json())
  //     .then(response => {
  //       setCategories(response)
  //     })
  // }, [])

  return (

    <List>
      {
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
    }
    </List>

  )
}
