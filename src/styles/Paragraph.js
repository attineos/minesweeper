import styled from 'styled-components'

const Paragraph = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fonts.fontSize.fs2};
    margin-bottom: ${theme.spaces.sh3};
    margin-top: ${theme.spaces.sh0};
    max-width: ${theme.sizes.widths.w600};
  `}

  ${({ mode, theme }) =>
    mode === 'label' &&
    `
    font-size: ${theme.fonts.fontSize.fs1d5};
    font-weight: bold;
    margin-bottom: ${theme.spaces.sh1};
  `}
`

export default Paragraph
