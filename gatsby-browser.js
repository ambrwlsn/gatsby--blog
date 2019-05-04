import React from 'react'

import { ThemeProvider } from './src/context/theme-context'

require('typeface-courgette')
require('typeface-quattrocento')
require('./src/utils/global.css')

const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export { wrapRootElement }
