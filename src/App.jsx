import { useState } from 'react'
import './App.css'
import { Items } from './components/Items'
import { Points } from './components/Points'

function App() {

  return (
    <>
      <Points />
      <div className='content'>
        <Items />
      </div>
    </>
  )
}

export default App
