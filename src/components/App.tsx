import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages import
import Home from '../pages/Home'
import SecondPage from '../pages/SecondPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secondpage" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
