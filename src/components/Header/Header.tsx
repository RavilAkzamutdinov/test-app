import React, { useEffect, useState } from 'react'
import {
  StyledHeaderContainer as HeaderContainer,
  StyledTitle as Title,
  StyledError as Error,
  StyledErrorHeading as ErrorHeading,
  StyledButton as Button,
} from './Header.style'
import Spinner from 'react-bootstrap/Spinner'

const Header = (props: {
  pageTitle: string
  onLogout: () => void
  loading: boolean
  error: string | null
}) => {
  const [show, setShow] = useState(props.error !== null)

  useEffect(() => {
    if (props.error) {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 10000)
    }
  }, [props.error])

  const handleClose = () => {
    setShow(false)
  }

  const handleLogout = () => {
    props.onLogout()
  }

  return (
    <HeaderContainer>
      <Title>{props.pageTitle}</Title>
      <Error show={show} onClose={handleClose} dismissible>
        <ErrorHeading>Error</ErrorHeading>
        {props.error}
      </Error>
      <Button onClick={handleLogout}>
        {props.loading ? <Spinner animation='border' variant='light' /> : 'Log out'}
      </Button>
    </HeaderContainer>
  )
}

export default Header