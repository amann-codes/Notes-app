import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Main/>} path='/'></Route>
    </Routes>
    </BrowserRouter>
  )
}
