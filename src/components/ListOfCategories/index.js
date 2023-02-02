/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react'
import { getApiBaseUrl } from '../../hooks/useConfig'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  const urlApi = getApiBaseUrl()

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch(`${urlApi}/categories`)
      const data = await response.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
    }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
