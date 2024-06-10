import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container-fluid p-0 mx-auto text-center'>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer title={'Productos destacados'}/>}/>
            <Route path='/categorias/:categoryId' element={<ItemListContainer title={'Productos'}/>}/>
            <Route path='/producto/:productId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
