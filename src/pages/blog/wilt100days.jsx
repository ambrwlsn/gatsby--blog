import React, { Fragment } from 'react'
import { graphql, navigate } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Select from 'react-select'
import ContentWrapper from '../../components/content-wrapper'
import LeafyLogo from '../../components/wilt-logo'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Arrow from '../../components/back-to-top'

const SmoothScrollStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
`

const Content = styled.article`
  padding-bottom: 1em;
`

const Hashtag = styled.a`
  text-decoration: none;
  color: var(--linkColor);
`
const ContentStyles = styled.div`
  font-family: 'Quattrocento', sans-serif;
  line-height: 1.6;
  font-size: 1.25em;
`
const PageTitle = styled.h1`
  font-family: 'Courgette', cursive;
  text-align: center;
`
const PostTitle = styled.h2`
  font-family: 'Courgette', cursive;
`
const WILT = styled(LeafyLogo)`
  display: block;
  margin: auto;
  max-width: 100%;
`

const BackToTop = styled(Arrow)``

const WiltDropdownContainer = styled.div`
  margin: 2em;
`

const customStyles = {
  menu: provided => ({
    ...provided,
    backgroundColor: '#ffffff',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'orange' : 'black',
    '&:hover': {
      backgroundColor: '#8dc63f',
      color: 'black',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  }),
  container: provided => ({
    ...provided,
    borderRadius: 0,
    maxWidth: 400,
    margin: 'auto',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

class wiltPage extends React.Component {
  state = {
    selectedOption: null,
    dropdownMenu: null,
  }

  componentDidMount() {
    this.setState({ dropdownMenu: true })
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    const fullLink = `/blog/wilt100days#${selectedOption.anchorName}`
    navigate(fullLink)
  }

  render() {
    const { selectedOption } = this.state

    const posts = this.props.data.allMarkdownRemark.edges

    const WiltDropdown = () => {
      const options = posts.map(({ node }) => {
        const { subject, day } = node.frontmatter
        return {
          value: `${day} - ${subject}`,
          label: `${day} - ${subject}`,
          anchorName: subject.replace(/\s+/g, ''),
        }
      })
      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          styles={customStyles}
        />
      )
    }
    return (
      <Layout>
        <ContentWrapper>
          <SmoothScrollStyle />
          <SEO
            title="What I Learned Today"
            keywords={['wilt', 'learning', 'javascript']}
          />
          <ContentStyles>
            <PageTitle>What I Learned Today - 100 Days</PageTitle>
            <WILT leafColor="green" textColor="currentColor" />
            {this.state.dropdownMenu && (
              <WiltDropdownContainer>
                <WiltDropdown />
              </WiltDropdownContainer>
            )}
            <p>
              I loved writing <a href="../words">100 words for 100 days</a>{' '}
              &amp; now want to write 100 days of little HTML, CSS or JS (ES6)
              lessons. I&apos;m going to write about methods and techniques that
              I use often, either at work or on personal projects. The lessons
              will be written from a <strong>NEWBIE</strong> (i.e. my)
              perspective, and so may not be perfect, but they will offer a
              valuable insight into the thoughts of a new developer. My goal is
              to learn/document things for myself, and to show people,
              particularly other new developers, how someone like me approaches
              my work and hopefully give them something they can relate to :)
              Thanks to <a href="https:lottejackson.com">Charlotte</a> for the
              suggestion!
            </p>
            <blockquote className="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                Write about a different pseudo class every day? Or a different
                HTML element or JS lesson every day? Anything you want to learn
                more about? I had hoped to do something similar and never got
                round to it.
              </p>
              &mdash; Charlotte Jackson (@lottejackson){' '}
              <a href="https://twitter.com/lottejackson/status/991415549476270081?ref_src=twsrc%5Etfw">
                May 1, 2018
              </a>
            </blockquote>
            {posts.map(({ node }) => {
              const { day, subject } = node.frontmatter
              return (
                <Fragment key={day}>
                  <PostTitle id={subject.replace(/\s+/g, '')}>
                    {`${day} - ${subject}`}{' '}
                    <Hashtag href={`#${subject.replace(/\s+/g, '')}`}>
                      {' '}
                      #
                    </Hashtag>
                    &nbsp;
                    <a className="link__top-of-page" href="#">
                      <BackToTop color={`var(--linkColor)`} />
                    </a>
                  </PostTitle>
                  <Content
                    className="e-content"
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </Fragment>
              )
            })}
          </ContentStyles>
        </ContentWrapper>
      </Layout>
    )
  }
}

export default wiltPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___number], order: ASC }
      filter: { frontmatter: { posttype: { eq: "wilt" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            day
            subject
            posttype
            number
          }
        }
      }
    }
  }
`
