import { useState } from 'react'
import './App.css'
import { Items } from './components/Items'
import { Points } from './components/Points'

function App() {
  const [points, setPoints] = useState(0);

  return (
    <>
      <header className='header'>
        <Points points={points} />
      </header>

      <section className='content'>
        <Items points={points} setPoints={setPoints} />
      </section>

      <footer>

      </footer>
    </>
  )
}

export default App
