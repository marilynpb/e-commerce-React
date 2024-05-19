import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container-fluid p-0 mx-auto text-center'>
        <NavBar/>
        <ItemListContainer title={'Productos destacados'}/>
      </div>
  )
}

export default App
