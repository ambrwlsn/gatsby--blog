import React from 'react'
import SEO from '@components/seo'
import favicon from '@components/img/favicon.ico'

const Favicon = () => (
  <>
    <SEO
      title="Homepage"
      keywords={[
        'blog',
        'gatsby',
        'javascript',
        'developer',
        'junior developer',
      ]}
    />
    <img src={favicon} alt="favicon" />
  </>
)

export default Favicon
