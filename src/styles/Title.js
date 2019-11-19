import styled from 'styled-components'

const Title = styled.h1`
  ${({ mb, ml, mr, pt, theme }) => `
    font-family: ${theme.fonts.fontFamily.oswald};
    font-size: ${theme.fonts.fontSize.fs4};
    margin-bottom: ${theme.spaces[mb] || mb || theme.spaces.sh2d5};
    margin-left: ${ml ? theme.spaces[ml] || ml : null};
    margin-right: ${mr ? theme.spaces[mr] || mr : null};
    margin-top: ${theme.spaces.sh0};
    padding-top: ${pt ? theme.spaces[pt] || pt : null};
  `}
`

export default Title
