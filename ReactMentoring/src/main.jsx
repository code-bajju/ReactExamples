import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ConditionalRendering from './ConditionalRendering/ConditionalRendering'
import MyList from './ListKeyRendering/ListKeyRendering'
import KeyRendering from './ListKeyRendering/KeyRendering'
import CounterToo from './RefrenceExample/RefsExample'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterToo/>
<KeyRendering/>
  </React.StrictMode>,
)
