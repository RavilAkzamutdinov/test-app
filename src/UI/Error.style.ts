import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert'
import * as palette from '../theme/palette'

export const StyledError = styled(Alert)`
  // eslint-disable-next-line prettier/prettier
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background-color: ${palette.colors.red};
  color: ${palette.colors.text};
  border: none;
`

export const StyledErrorHeading = styled(Alert.Heading)`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 0.2em 0;
`
