import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {

  return (
    <div className='w-full min-h-screen bg-[#030712] text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App