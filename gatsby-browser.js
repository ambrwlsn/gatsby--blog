import React from 'react'
import { ThemeProvider } from './src/context/theme-context'
import { HasJavaScriptProvider } from './src/context/has-javascript'
import 'lazysizes'

require('typeface-courgette')
require('typeface-quattrocento')
require('./src/utils/global.css')

const wrapRootElement = ({ element }) => (
  <HasJavaScriptProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </HasJavaScriptProvider>
)

export { wrapRootElement }
