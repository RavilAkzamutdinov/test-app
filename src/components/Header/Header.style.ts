import styled from 'styled-components'
import { StyledButton as Button } from '../../UI/Button.style'
import { StyledError as Error, StyledErrorHeading as ErrorHeading } from '../../UI/Error.style'
import * as palette from '../../theme/palette'

export const StyledHeaderContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  background-color: ${palette.colors.primary};
`

export const StyledTitle = styled.div`
  font-size: 24px;
  color: ${palette.colors.text};
  margin-left: 3rem;
`

export const StyledError = styled(Error)`
  max-width: 60%;
  margin-top: auto;
`

export const StyledErrorHeading = styled(ErrorHeading)``

export const StyledButton = styled(Button)`
  margin-right: 3rem;
  height: 2.5rem;
  width: 6rem;
`