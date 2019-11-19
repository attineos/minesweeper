import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { isNil } from 'lodash'

const commonStyle = css`
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;

  ${({ disabled, mb, ml, mr, mt, theme }) => `
  font-size: ${theme.fonts.fontSize.fs2};
  background: ${theme.components.button.backgroundColor};
  margin-right: ${mr ? theme.spaces[mr] || mr : null}
  margin-left: ${ml ? theme.spaces[ml] || ml : null}
  margin-bottom: ${mb ? theme.spaces[mb] || mb : null}
  margin-top: ${mt ? theme.spaces[mt] || mt : null}
  padding: ${theme.spaces.sh1d5};
  color: ${theme.components.button.color};
  min-width: ${theme.sizes.widths.w100};

  ${
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.7;
  `
      : `
    &:hover {
      cursor: pointer;
      background: ${theme.components.button.backgroundColorHover};
    }
  `
  };

  &:visited {
    color: ${theme.components.button.color};
  }
`}
`

const Button = styled.button`
  ${commonStyle};
`

const StyledLink = styled(Link)`
  ${commonStyle};
`

export default props =>
  props.disabled || isNil(props.to) ? <Button {...props} /> : <StyledLink {...props} />
