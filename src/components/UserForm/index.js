import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title>{title}</Title>

      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Input placeholder='Email' disabled={disabled} type='text' {...email} />
        <Input placeholder='Password' disabled={disabled} type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </div>
  )
}
