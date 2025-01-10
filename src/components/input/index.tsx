import clsx from 'clsx'
import { ComponentProps, FC, ReactNode } from 'react'
import './styles.css'

interface Props extends ComponentProps<'input'> {
  leftContent?: ReactNode
  wrapperClassName?: string
}

export const Input: FC<Props> = ({
  leftContent,
  wrapperClassName,
  className,
  ...props
}) => {
  return (
    <div className={clsx('input__wrapper', wrapperClassName)}>
      <label className="input__left-content" htmlFor={props.id}>
        {leftContent}
      </label>
      <input className={clsx('input__controller', className)} {...props} />
    </div>
  )
}
