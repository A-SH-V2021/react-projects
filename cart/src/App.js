import React from 'react'
import {useGlobalContext} from './context/Context.jsx'
const App = () => {
  const value=useGlobalContext()
 
  return (
    <div>
      <h2>hello cart</h2>
    </div>
  )
}

export default App
