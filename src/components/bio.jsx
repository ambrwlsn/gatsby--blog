import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      // eslint-disable-next-line
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: 'flex',
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%',
              }}
            />
            &nbsp;
            <p>
              Written by <strong className="p-author">{author}</strong> who lives and works in
              Berlin building useful things.{' '}
              <a href={`https://twitter.com/${social.twitter}`}>You can follow her on Twitter</a> or
              send her an email <a href="mailto:ambrwlsn90@gmail.com">here</a>. © 2018
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "contents/assets/me.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
