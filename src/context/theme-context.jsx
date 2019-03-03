import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  isDarkTheme: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const isOSDarkModeSet = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const localStorageDark = JSON.parse(localStorage.getItem('isDarkTheme'))
    if (localStorageDark || isOSDarkModeSet()) {
      setDarkTheme(true)
    }
  }, [])

  const toggleDark = () => {
    localStorage.setItem('isDarkTheme', JSON.stringify(!isDarkTheme))
    setDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDark }}>{children}</ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContext

export { ThemeProvider }
