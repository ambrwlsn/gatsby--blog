import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: 50rem;
  margin: auto;
  @media (max-width: 900px) {
    margin: 2rem;
  }
  @media (max-width: 450px) {
    margin: 1rem;
  }
`

export default ContentWrapper
