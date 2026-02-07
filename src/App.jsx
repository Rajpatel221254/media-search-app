import React, { useState } from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/collection'
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