import React, { useState } from 'react'
import {
  StyledFormContainer as FormContainer,
  StyledForm as Form,
  StyledTitle as Title,
  StyledFormControl as FormControl,
  StyledError as Error,
  StyledErrorHeading as ErrorHeading,
  StyledButton as Button,
} from './Login.style'
import { User } from '../../types/auth'
import Spinner from 'react-bootstrap/Spinner'

const initialState: User = {
  email: '',
  password: '',
}

const Login = (props: {
  onSubmit: (values: User) => void
  loading: boolean
  error: string | null
}) => {
  const [formValues, setFormValues] = useState<User>(initialState)

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { type, value } = event.target
    setFormValues({
      ...formValues,
      [type]: value,
    })
  }

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    props.onSubmit(formValues)
  }

  return (
    <FormContainer>
      <Form>
        <Title>Sign in</Title>
        <FormControl type='email' placeholder='Email' onChange={handleTextFieldChange} />
        <FormControl type='password' placeholder='Password' onChange={handleTextFieldChange} />
        {props.error ? (
          <Error>
            <ErrorHeading>Error</ErrorHeading>
            {props.error}
          </Error>
        ) : (
          <></>
        )}
        <Button type='submit' onClick={handleSubmit}>
          {props.loading ? <Spinner animation='border' variant='light' /> : 'Sign in'}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Login