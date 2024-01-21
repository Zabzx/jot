import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.tsx'
import "@fontsource/lato"

const theme = extendTheme({
  fonts: {
    body: `"Lato", sans-serif`,
    heading: `"Lato", sans-serif`
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
