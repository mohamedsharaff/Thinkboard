import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Update from './pages/Update.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navigation />

    <Routes>

      <Route path='/' element={<Home />} ></Route>
      <Route path='/create' element={<Create />} ></Route>
      <Route path='/:id' element={<Update />} ></Route>

    </Routes>
      
    </>
  )
}

export default App
