import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'  // Make sure this import is here
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)