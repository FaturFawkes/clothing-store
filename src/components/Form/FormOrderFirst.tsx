import React, { useState } from 'react'
import Input from '../Input/Input'
import { FirstFormOrder } from '../../utils/type/DataType'

const initialFormValues : FirstFormOrder = {
  name: '',
  address: '',
  org: '',
}

const FormOrderFirst= () => {
  const [value, setValue] = useState<FirstFormOrder>(initialFormValues)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({... value, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Input
      name='name-input'
      label='Name'
      type='text'
      value={value.name}
      onChange={handleInputChange}
      />
      <Input
      name='tel-input'
      label='No HP'
      type='tel'
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
      <label htmlFor="alamat-input" className='block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white'>Alamat</label>
      <textarea id='alamat-input' className="textarea textarea-bordered grid justify-items-end pr-[135px]" placeholder=""></textarea>
    </>
  )
}

export default FormOrderFirst
