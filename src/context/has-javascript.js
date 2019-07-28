import React from 'react'

const HasJavaScriptContext = React.createContext(false)

const HasJavaScriptProvider = ({ children }) => {
  const [hasJavaScript, setJSAvailability] = React.useState(false)
  React.useEffect(() => setJSAvailability(true), [])

  return (
    <HasJavaScriptContext.Provider value={{ hasJavaScript }}>
      {children}
    </HasJavaScriptContext.Provider>
  )
}

export default HasJavaScriptContext

export { HasJavaScriptProvider }
