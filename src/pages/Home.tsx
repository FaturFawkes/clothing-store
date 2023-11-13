import React, { Component } from 'react'
import Navbar from './../components/Navbar'
import Jumbotron from '../components/Jumbotron'

export class Home extends Component {
  render() {
    return (
      <div className='w-screen'>
        <Navbar/>
        <Jumbotron/>
        <div className="grid grid-rows-3 grid-flow-col gap-4 h-[600px]">
          <div className="row-span-3 ... bg-red-200">
            <div className='block h-[400px] mt-[100px] bg-blue-200'>
              
            </div>
          </div>
          <div className="col-span-2 row-span-2 bg-red-400">02</div>
          <div className="row-span-1 col-span-2 ... bg-red-700">03</div>
        </div>
      </div>
    )
  }
}

export default Home