import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import "@fontsource/lato"
import Login from './components/Login.tsx'

const theme = extendTheme({
  fonts: {
    body: `"Lato", sans-serif`,
    heading: `"Lato", sans-serif`
  }
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
