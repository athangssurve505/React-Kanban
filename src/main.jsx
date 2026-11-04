import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/variables.css"
import "./styles/index.css"
import App from './App.jsx'
import { TaskProvider } from './Context/TaskProvider.jsx'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </TaskProvider>
)
