import { createRoot } from 'react-dom/client'
import './index.css'
import MainContent from './components/MainContent.jsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <MainContent />
  </ChakraProvider>,
)
