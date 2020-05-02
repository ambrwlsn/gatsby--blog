import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { expandHitbox, visuallyHidden } from '@utils/utils'
import Sun from './img/sun'
import Moon from './img/moon'

const HiddenToggle = styled.span`
  position: relative;
  @media (min-width: 800px) {
    border: 1.5px solid var(--textColor);
    padding: 0 5px;
    border-radius: 18px;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    width: 50px;
    height: 30px;
  }
`

const ToggleLabel = styled.label`
  ${expandHitbox}
`

const ToggleLabelWrapper = styled.span`
  ${visuallyHidden}
`

const ToggleInput = styled.input`
  opacity: 0;
  margin: 0;
  position: absolute;
`

const ToggleWrapper = styled.div`
  position: relative;
  /* https://ghinda.net/article/mimic-native-focus-css/ */
  ${props =>
    props.focused &&
    css`
      outline-style: solid;
      outline-color: Highlight;
      @media (-webkit-min-device-pixel-ratio: 0) {
        outline-color: -webkit-focus-ring-color;
        outline-style: auto;
      }
    `}
  @media (min-width: 800px) {
    border: 1.5px solid var(--textColor);
    padding: 0 5px;
    border-radius: 18px;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    width: 50px;
    height: 30px;
  }
`

const IconWrapper = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-right: 0;
  padding-top: 0.4rem;
  height: 20px;
  width: 20px;

  @media (min-width: 800px) {
    padding-top: 0.25rem;
    will-change: transform;
    transition: transform 400ms ease-out;
    input:checked + & {
      transform: translateX(160%);
    }
  }
`

const SunIcon = styled(Sun)`
  pointer-events: none;
  height: 20px;
  width: 20px;
`
const MoonIcon = styled(Moon)`
  pointer-events: none;
  height: 20px;
  width: 20px;
`

const ModeToggle = ({ checked, onChange }) => {
  const [mounted, setMounted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <HiddenToggle />

  return (
    <ToggleWrapper focused={focused}>
      <ToggleLabel htmlFor="toggle">
        <ToggleLabelWrapper>Light and dark mode toggle</ToggleLabelWrapper>
      </ToggleLabel>
      <ToggleInput
        type="checkbox"
        id="toggle"
        name="toggle"
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        checked={checked}
        onChange={() => {
          onChange(!checked)
        }}
      />
      <IconWrapper>{checked ? <SunIcon /> : <MoonIcon />}</IconWrapper>
    </ToggleWrapper>
  )
}

export default ModeToggle
