import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  position: absolute;
  opacity: 0;
`
const Wrapper = styled.label`
  position: absolute;
  right: 20px;
  float: right;
  text-align: right;
  border: 2px solid var(--textColor);
  padding: 0 5px;
  border-radius: 15px;
  display: inline-block;
  width: 2.3em;
`
const Handle = styled.span`
  position: relative;
  right: -5px;

  display: inline-block;
  will-change: transform;
  transition: transform 230ms ease-out;
  input:checked + & {
    transform: translateX(-100%);
  }
`

const ModeToggle = ({ checked, onChange, ...otherProps }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })

  if (!mounted) return null
  return (
    <Wrapper htmlFor="mode">
      <Input
        {...otherProps}
        type="checkbox"
        id="mode"
        checked={checked}
        onChange={() => {
          onChange(!checked)
        }}
      />
      <Handle>
        {checked ? <Fragment>☀️</Fragment> : <Fragment>🌕</Fragment>}
      </Handle>
    </Wrapper>
  )
}

export default ModeToggle
