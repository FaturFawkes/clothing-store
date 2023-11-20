import {BrowserRouter, Routes, Route} from "react-router-dom" 
import React, {Component} from "react"
import './App.css'
import Order from "./pages/Order"
import Home from "./pages/Home"

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order-baju" element={<Order/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App

