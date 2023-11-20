import Input from '../Input/Input'
import Button from '../Button'
import React, { useState } from 'react'
import { SecondFormOrder } from '../../utils/type/DataType'

const initialFormValues : SecondFormOrder = {
  name: '',
  address: '',
  number: 0,
  org: '',
}

const FormOrderSecond = () => {
  const [value, setValue] = useState<SecondFormOrder>(initialFormValues)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({... value, [e.target.name]: e.target.value})
  }
  return (
    <div className='min-h-screen w-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-md shadow-md'>
        <form action="">
          <Input
          name='name-input'
          label='Name'
          type='text'
          value={""}
          onChange={handleInputChange}
          />
          <Input
          name='password-input'
          label='Password'
          type='password'
          value={""}
          onChange={handleInputChange}
          />
          </form>
        <Button color='primary' label='order' name='register' type={'submit'}></Button>
      </div>
    </div>
  )
  }

export default FormOrderSecond
