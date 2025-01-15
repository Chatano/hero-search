import { FC } from 'react'
import './styles.css'

interface Props {
  title: string
  description?: string
}

export const Issue: FC<Props> = ({ title, description }) => {
  return (
    <div className="issue">
      <h1 className="issue__title">{title}</h1>
      <p className="issue__desc">{description}</p>
    </div>
  )
}
