import React from 'react'
import styled from 'styled-components'

import { capitalize, find, map } from 'lodash'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ styles, theme }) => styles.marginBottom || theme.spaces.sh3};
  margin-right: ${({ styles }) => styles.marginRight};
`

const StyledSelect = styled.select`
  ${({ styles, theme }) => `
    font-size: ${theme.fonts.fontSize.fs1d5};
    min-width: ${styles.width || theme.sizes.widths.w300}
    padding: ${theme.spaces.sh1}

    option {
      font-size: ${theme.fonts.fontSize.fs1d5};
    }
  `}
`

const StyledLabel = styled.label`
  font-weight: bold;

  ${({ theme }) => `
    font-size: ${theme.fonts.fontSize.fs1d5}
    margin-bottom: ${theme.spaces.sh1};
  `};
`

function Select({ id, label, onClick, options, styles }) {
  const selectedOption = find(options, option => option.isSelected)
  const { container, select } = styles || { container: {}, select: {} }

  function handleClick(e) {
    onClick && onClick(e.target.value)
  }

  return (
    <SelectContainer styles={container}>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledSelect
        id={id}
        onChange={handleClick}
        defaultValue={selectedOption ? selectedOption.id : options[0].id}
        styles={select}
      >
        {map(options, option => (
          <option key={option.id} value={option.id}>
            {capitalize(option.label)}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  )
}

export default Select
