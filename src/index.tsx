import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core'
import App from './App'
import './index.css'

const theme = responsiveFontSizes(createMuiTheme())

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
