import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <div style={{ padding: '20px' }}>
      <Title>{title}</Title>

      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' type='text' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </div>
  )
}
