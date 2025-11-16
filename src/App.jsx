import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'

import { HomePageLayout } from './layouts/HomePageLayout'
import LegacyLeadershipPage from './pages/LegacyLeadershipPage'
import { Sustainability } from './pages/Sustainability'
import ScrollToTop from './components/common/ScrollToTop'
import Story from './pages/Story/Story'
function App() {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/story" element={<Story/>}/>
      <Route path="/about-us" element={<Story/>}/>
      <Route path="/" element={<HomePageLayout />}>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/legacy-leadership" element={<LegacyLeadershipPage/>} />
        <Route path="/sustainability" element={<Sustainability/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App
