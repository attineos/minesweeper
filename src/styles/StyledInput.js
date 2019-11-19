import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  ${({ theme }) => `
    border: ${theme.spaces.s1} solid ${theme.components.input.borderColor};
    min-width: ${theme.sizes.widths.w300};
    padding: ${theme.spaces.sh1} ${theme.spaces.sh1d5};

    ::placeholder {
      font-size: ${theme.fonts.fontSize.fs1d5};
    }
  `}

  &:active,
  &:hover,
  &:focus {
    border: ${({ theme }) => `${theme.spaces.s1} solid ${theme.components.input.borderColorHover}`};
    outline: none;
  }
`

function Input({ onChange, ...props }) {
  function handleChange(e) {
    onChange && onChange(e.target.value)
  }

  return <StyledInput {...props} onChange={handleChange} />
}

export default Input
