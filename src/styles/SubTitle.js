import styled from 'styled-components'

const Title = styled.h2`
  ${({ theme }) => `
    font-family: ${theme.fonts.fontFamily.oswald};
    font-size: ${theme.fonts.fontSize.fs3};
    margin-bottom: ${theme.spaces.sh1d5};
    margin-top: ${theme.spaces.sh0};
  `}
`

export default Title
