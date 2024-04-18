import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger' | 'info';
    onClick: () => void;
}

const Button = ({children,color,onClick}:Props) => {
  return (
    <button className= {'btn btn-' + color}
    onClick={onClick}>{children}</button>
  )
}

export default Button