import Input from '../Input/Input'
import React, { useState } from 'react'
import { SecondFormOrder } from '../../utils/type/DataType'

const initialFormValues : SecondFormOrder = {
  color: '',
  material: '',
  printType: '',
  qty: 0,

}

const FormOrderSecond = () => {
  const [value, setValue] = useState<SecondFormOrder>(initialFormValues)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({... value, [e.target.name]: e.target.value})
  }
  return (
    <>
      <Input
      name='color-input'
      label='Warna'
      type='text'
      value={value.color}
      onChange={handleInputChange}
      />
      <Input
      name='material-input'
      label='Jenis Bahan'
      type='text'
      value={value.material}
      onChange={handleInputChange}
      />  
      <Input
      name='printType-input'
      label='Jenis Sablon'
      type='text'
      value={value.printType}
      onChange={handleInputChange}
      />  
      <Input
      name='qty-input'
      label='Jumlah'
      type='number'
      value={value.qty}
      onChange={handleInputChange}
      />  
    </>
  )
}

export default FormOrderSecond
