'use client'

import { FC, ReactNode } from 'react'
import '@/styles/components/ui/Button.css'

export interface ButtonProps {
  children: ReactNode
  link?: string
  onClick?: () => void
  download?: string
  color?: 'white'
  target?: string
  id?: string
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  download,
  color = '',
  target,
  ...props
}) => {
  return (
    <div className='button_background' id={props.id}>
      <a
        className={'button ' + color}
        href={props.link}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    </div>
  )
}

export default Button
