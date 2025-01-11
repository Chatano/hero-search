'use client'
import { useRouter } from 'next/navigation'
import './styles.css'
import { FC, PropsWithChildren } from "react"

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const onClose = () => router.back()

  return (
    <div className='modal__wrapper'>
      <div onClick={onClose} className="modal__overlay" />
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}