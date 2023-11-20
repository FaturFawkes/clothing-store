import React from "react"

interface InputProps {
    label: string
    name: string
    value: any
    type?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({label, name, value, type, onChange}) => {
  return (
    <div className="mb-4">
        <label htmlFor={name} className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
            {label}
        </label>
        <input type={type} value={value} id={name} onChange={() => onchange } 
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
    </div>
  )
  }


export default Input