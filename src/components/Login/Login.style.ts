import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import { StyledButton as Button } from '../../UI/Button.style'
import { StyledError as Error, StyledErrorHeading as ErrorHeading } from '../../UI/Error.style'

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`

export const StyledForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  padding: 2rem;
  border-radius: 3%;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
`

export const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 1rem;
`

export const StyledFormControl = styled(Form.Control)`
  width: 100%;
  margin: 0.5rem;
  height: 3em;
`

export const StyledError = styled(Error)`
  width: 100%;
  margin: 0.5rem;
`

export const StyledErrorHeading = styled(ErrorHeading)``

export const StyledButton = styled(Button)`
  width: 100%;
  margin: 0.5rem;
  height: 3rem;
`