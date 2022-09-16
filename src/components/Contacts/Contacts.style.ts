import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import { StyledButton as Button } from '../../UI/Button.style'
import * as palette from '../../theme/palette'

export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`

export const StyledSpinner = styled(Spinner)`
  color: ${palette.colors.primary};
`

export const StyledContactsContainer = styled(ListGroup)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 3rem;
`

export const StyledContact = styled(ListGroup.Item)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
`

export const StyledContactText = styled.p`
  margin: 0;
`

export const StyledContactButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`

export const StyledContactEditButton = styled(Button)`
  margin-right: 0.5rem;
  padding: 0;
  height: 2.5rem;
  width: 2.5rem;
`

export const StyledContactDeleteButton = styled(Button)`
  padding: 0;
  height: 2.5rem;
  width: 2.5rem;
`