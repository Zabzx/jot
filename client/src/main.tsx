import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import "@fontsource/lato"
import Login from './components/Login.tsx'
import SignUp from './components/SignUp.tsx'
import PrivateRoutes from './components/PrivateRoutes.tsx'
import "./index.css"

const theme = extendTheme({
  fonts: {
    body: `"Lato", sans-serif`,
    heading: `"Lato", sans-serif`
  }
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript/>
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="*" element={<App />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
