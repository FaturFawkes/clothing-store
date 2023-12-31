import React from 'react'

interface InputProps {
    label: string
    name: string
    type?: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps>  = (props) => {
  const {label, name, type, value, onChange} = props
  
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-gray-700 font-bold mb-2'>
          {label}
      </label>
      <input id={name} value={value} type={type} onChange={onChange}
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light bg-white'/>
    </div>
  )
}

export default Input