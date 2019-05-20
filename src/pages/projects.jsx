import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.main`
  display: flex;
  justify-content: center;
  line-height: 1.6;
  font-size: 1.25rem;
  padding-bottom: 2rem;
`

const Projects = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={['blog', 'gatsby', 'javascript', 'react']}
    />
    <Container>
      <div>
        <h1>Projects</h1>
        <p>
          The first project I'll list here is my own site - things I've done,
          and what I want to do.
        </p>
        <p>If you think I should improve something, let me know and I will.</p>
        <h2>To do:</h2>
        <ul>
          <li>Complete clean, semantic HTML.</li>
          <li>Bring down network requests.</li>
          <li>Make everything as accessible as possible.</li>
          <li>Only render React on the server, not client.</li>
          <li>Add functionality to cat.</li>
          <li>Optimise book review page for tablets.</li>
          <li>Refactor all existing code.</li>
          <li>Make sure there is a font/spacing sizing system.</li>
          <li>Make all functionality available in no-js.</li>
          <li>Optimise for IE11.</li>
        </ul>
      </div>
    </Container>
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
