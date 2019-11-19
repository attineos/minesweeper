import styled from 'styled-components'

import Title from './Title'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Title}:first-of-type {
    padding-top: ${({ theme }) => theme.spaces.sh5};
  }
`

export default Page
