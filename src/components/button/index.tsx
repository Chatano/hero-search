import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import './styles.css'

export const Button: FC<ComponentProps<'button'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx('button__wrapper', className)} {...props}>
      {children}
    </button>
  )
}
