import React from 'react'

const StructuredJSON = (title, keywords, url, name) => {
  const data = {
    '@context': 'http://schema.org/',
    '@type': 'BlogPosting',
    headline: { title },
    keywords: { keywords },
    url: { url },

    // datePublished: '2018-08-04T19:47:51Z',
    // dateCreated: '2018-08-04T19:47:51Z',
    // dateModified: '2018-08-04T19:47:51Z',

    // image: {
    //   '@type': 'ImageObject',
    //   url: 'https://amberwilson.co.uk/img/workspace.jpg',
    //   height: 686,
    //   width: 1150,
    // },

    editor: {
      '@type': 'Person',
      name: { name },
      url: { url },
    },
    publisher: {
      '@type': 'Person',
      name: { name },
      url: { url },
    },
    author: {
      '@type': 'Person',
      name: { name },
      url: { url },
    },
  }
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}

export default StructuredJSON
