import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import "@fontsource/lato"

const theme = extendTheme({
  fonts: {
    body: `"Lato", sans-serif`,
    heading: `"Lato", sans-serif`
  }
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>
)
