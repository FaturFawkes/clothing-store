import React, { useState   } from 'react'
import Navbar from '../components/Navbar'
import FormOrderFirst from '../components/Form/FormOrderFirst'
import FormOrderSecond from '../components/Form/FormOrderSecond'
import Button from '../components/Button'

const Order = () => {
  const [page, setPage] = useState(0)
  const nextForm = () => {
    setPage(page + 1)
  }

  const prevForm = () => {
    setPage(page - 1)
  }

  console.log(page)

  const conditialComponent = () => {
    switch (page) {
        case 0:
            return <FormOrderFirst/>
        case 1:
            return <FormOrderSecond/>
        default: 
            return <FormOrderSecond/>
    }
  
  }
  
  return (
      <div className='w-screen'>
        <Navbar/>
        <div className='mt-[200px] flex justify-center'>
          <div className="card w-100 bg-white shadow-xl">
            <ul className="steps">
              <li className="step step-primary">Identitas</li>
              <li className={page == 1? "step step-primary": "step"}>Detail Pesanan</li>
              <li className={page == 2? "step step-primary": "step"}>Alamat</li>
              <li className={page == 3? "step step-primary": "step"}>Metode Pembayaran</li>
            </ul>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Identitas Pemesan</h2>
            </div>
            <div className="flex justify-center">
            <form action="" className='w-[350px]'>
              {conditialComponent()}
            </form>
            </div>
              <section className='my-10'> 
            <Button type={'button'}  color='primary' label='Previous' name='next' onClick={() => prevForm()}></Button>
            <Button type={'button'} color='primary' label='Next' name='next' onClick={() => nextForm()}></Button>
      </section>
          </div>
        </div>
      </div>
    )
}

export default Order