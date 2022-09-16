import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import * as palette from '../theme/palette'

export const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: none !important;
  background-color: ${(props) =>
    props.danger
      ? palette.colors.red
      : props.warning
      ? palette.colors.secondary
      : palette.colors.primary};
  :hover {
    background-color: ${(props) =>
      props.danger
        ? palette.colors.redHover
        : props.warning
        ? palette.colors.secondaryHover
        : palette.colors.primaryHover};
  }
  :focus,
  :active {
    background-color: ${(props) =>
      props.danger
        ? palette.colors.red
        : props.warning
        ? palette.colors.secondary
        : palette.colors.primary};
    :hover {
      background-color: ${(props) =>
        props.danger
          ? palette.colors.redHover
          : props.warning
          ? palette.colors.secondaryHover
          : palette.colors.primaryHover};
    }
  }
`