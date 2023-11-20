import React, { useState } from 'react'
import { OrderDetail } from '../../utils/type/DataType'
import Input from '../Input/Input'

const initialOrderDetail : OrderDetail = {
    longSleeve: false,
    name: '',
    size: '',
}

const FormOrderDetail = (count: number) => {
    const inputDetail : OrderDetail = []
    const [value, setValue] = useState<OrderDetail>(initialOrderDetail)

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    
    for (let i = 1; i <= count; i++) {
      <Input
      name= {'name-' + i + '-input'}
      label='Name'
      type='text'
      value={value.name}
      onChange={handleInputChange}
      />
    return (
        inputDetail
    )
}

export default FormOrderDetail