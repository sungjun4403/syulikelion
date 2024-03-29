import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import './components/CounterComponent'
import CounterComponent from './components/CounterComponent'
import Introduce from './components/Introduce'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
