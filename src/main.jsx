import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Pages/App/App'
import { Contador } from './Pages/Contador/Contador'
import GlobalStyle from './Styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador />
    <GlobalStyle />
  </React.StrictMode>
)
