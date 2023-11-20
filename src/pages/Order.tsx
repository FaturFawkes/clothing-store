import React, { useState   } from 'react'
import Navbar from '../components/Navbar'
import CardOrder from '../components/Card/CardOrder'
import FormOrderFirst from '../components/Form/FormOrderFirst'
import FormOrderSecond from '../components/Form/FormOrderSecond'

const Order = () => {
  const [page, setPage] = useState(0)
  console.log(page)
  const conditialComponent = () => {
    switch (page) {
        case 0:
            return <FormOrderFirst/>
        case 1:
            return 
        default: 
            return <FormOrderSecond/>
    }
  }
  
  return (
      <div className='w-screen'>
        <Navbar/>
        <div className='mt-[200px] flex justify-center'>
        <CardOrder component={conditialComponent()} />
        </div>
      </div>
    )
}

export default Order