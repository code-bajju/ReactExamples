import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Button from './assets/ModuleLearning/Button.jsx'
import MainExample from './assets/ModuleLearning/Main.jsx'
import Counter from './StatesExample/Counter.jsx'
import ChildParent from './PropsExample/ChildParent.jsx'
import ParentComponent from './PropsExample/ParentComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MainExample/> */}
    {/* <Counter/> */}
    
    <ParentComponent/>
  </React.StrictMode>,
)
