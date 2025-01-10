import clsx from "clsx"
import { ComponentProps, FC, ReactNode } from "react"
import './styles.css'

interface Props extends ComponentProps<'input'> {
  leftContent?: ReactNode
}

export const Input: FC<Props> = ({ leftContent, className, ...props }) => {
  return (
    <div className="input__wrapper">
      {leftContent}
      <input className={clsx("input__controller", className)} {...props} />
    </div>
  )
}