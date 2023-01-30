/* eslint-disable react/jsx-key */

import React from 'react'
import { Category } from '../category'
import { categories } from '../../../api/db.json'
import { List, Item } from './styles'

export const ListOfCategories = () => (
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
