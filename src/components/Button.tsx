import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ButtonProps {
    name: string
    color: string
    label: string
    type?: any
    onClick?: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({color, type, label, name, onClick}) => {
    return (
        <button type={type} id={name} className={'btn btn-' + color} onClick= {onClick}>
            {label}
        </button>
    )
}

export default Button   