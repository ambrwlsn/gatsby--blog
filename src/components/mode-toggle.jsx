import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Sun from './img/sun'
import Moon from './img/moon'

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
const Wrapper = styled.label`
  cursor: pointer;
  text-align: right;
  border: 1.5px solid var(--textColor);
  padding: 0 5px;
  border-radius: 25px;
  display: inline-block;
  width: 2.5em;
  height: 1.5em;
  @media (max-width: 800px) {
    border: none;
    width: 0.7rem;
  }
  /* https://ghinda.net/article/mimic-native-focus-css/ */
  ${props =>
    props.focused &&
    css`
      outline-width: 4px;
      outline-style: solid;
      outline-color: Highlight;
      @media (-webkit-min-device-pixel-ratio: 0) {
        outline-color: -webkit-focus-ring-color;
        outline-style: auto;
      }
    `}
`

const HiddenWrapper = styled.span`
  display: inline-block;
  text-align: right;
  visibility: hidden;
  padding: 0 5px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  width: 2.5em;
  height: 1.5em;
  @media (max-width: 800px) {
    border: none;
    width: 0.7rem;
  }
`
const Handle = styled.span`
  position: relative;
  right: -5px;
  top: 5px;
  display: inline-block;
  cursor: pointer;
  will-change: transform;
  transition: transform 400ms ease-out;
  input:checked + & {
    transform: translateX(-100%);
  }
  @media (max-width: 800px) {
    transition: none;
    input:checked + & {
      transform: none;
    }
  }
`
const SunToggle = styled(Sun)`
  margin-right: 4px;
  max-width: 100%;
  @media (max-width: 800px) {
    margin-right: 0;
    width: 20px;
  }
`
const MoonToggle = styled(Moon)`
  margin-right: 9.4px;
  max-width: 100%;
  @media (max-width: 800px) {
    margin-right: 0;
    width: 20px;
  }
`

const ModeToggle = ({ checked, onChange, className }) => {
  const [mounted, setMounted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <HiddenWrapper />

  return (
    <Wrapper htmlFor="mode" className={className} focused={focused}>
      <Input
        type="checkbox"
        id="mode"
        name="mode"
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        checked={checked}
        onChange={() => {
          onChange(!checked)
        }}
      />
      <Handle>{checked ? <SunToggle /> : <MoonToggle />}</Handle>
    </Wrapper>
  )
}

export default ModeToggle
