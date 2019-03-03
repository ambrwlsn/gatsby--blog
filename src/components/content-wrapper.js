import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: 50em;
  margin: auto;
  @media (max-width: 900px) {
    margin: 2em;
  }
  @media (max-width: 450px) {
    margin: 0.8em;
  }
`

export default ContentWrapper
