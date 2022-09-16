import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import { StyledButton as Button } from '../../UI/Button.style'
import * as palette from '../../theme/palette'

export const StyledToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  background-color: ${palette.colors.background};
`

export const StyledSearchForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 3rem;
`

export const StyledSearchFormControl = styled(Form.Control)`
  width: 250px;
  height: 2.5rem;
`

export const StyledButton = styled(Button)`
  margin-left: 3rem;
  height: 2.5rem;
`