import {BrowserRouter, Routes, Route} from "react-router-dom" 
import React, {Component} from "react"
import './App.css'
import {Home} from './pages/Home'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App

