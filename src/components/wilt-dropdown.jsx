import React from 'react'
import Select from 'react-select'

const WiltDropdown = ({ posts, value }) => {
  const options = posts.map(({ node }) => {
    const { subject, day } = node.frontmatter
    return {
      value: `${day} - ${subject}`,
      label: `${day} - ${subject}`,
      anchorName: subject.replace(/\s+/g, ''),
    }
  })
  return <Select value={value} onChange={this.handleChange} options={options} />
}

export default WiltDropdown
