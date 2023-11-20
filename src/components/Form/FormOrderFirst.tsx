import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button'
import { FirstFormOrder } from '../../utils/type/DataType'

const initialFormValues : FirstFormOrder = {
  name: '',
  address: '',
  number: 0,
  org: '',
}

const FormOrderFirst= () => {
  const [value, setValue] = useState<FirstFormOrder>(initialFormValues)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({... value, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <div className="flex justify-center">
      <form action="" className='w-[350px]'>
        <Input
        name='name-input'
        label='Name'
        type='text'
        value={value.name}
        onChange={handleInputChange}
        />
        <Input
        name='number-input'
        label='No HP'
        type='number'
        value={value.number}
        onChange={handleInputChange}
        />
        <Input
        name='org-input'
        label='Komunitas / Organisasi'
        type='string'
        value={value.org}
        onChange={handleInputChange}
        />
        <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
        </form>
      </div>
      <Button type={'submit'} color='primary' label='order' name='register'></Button>
    </div>

  )
  }

export default FormOrderFirst
