import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: 50rem;
  margin: 1rem;

  @media (min-width: 900px) {
    margin: 2rem;
  }

  @media (min-width: 1200px) {
    margin: auto;
  }
`

export default ContentWrapper
