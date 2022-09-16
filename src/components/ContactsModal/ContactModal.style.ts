import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import { StyledButton as Button } from '../../UI/Button.style'
import Modal from 'react-bootstrap/Modal'

export const StyledModal = styled(Modal)``

export const StyledModalHeader = styled(Modal.Header)`
  margin-left: 1rem;
  margin-right: 1rem;
`

export const StyledModalTitle = styled(Modal.Title)``

export const StyledModalBody = styled(Modal.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalFooter = styled(Modal.Footer)``

export const StyledForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`

export const StyledFormControl = styled(Form.Control)`
  width: 100%;
  margin: 1rem;
  height: 3rem;
`

export const StyledButton = styled(Button)`
  margin-right: 1rem;
  height: 2.5rem;
  width: 5rem;
`