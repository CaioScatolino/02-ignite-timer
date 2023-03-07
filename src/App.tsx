import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
        <GlobalStyle />
      </HashRouter>
    </ThemeProvider>
  )
}
