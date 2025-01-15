'use client'
import { useRouter } from 'next/navigation'
import './styles.css'
import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import { ChevronLeftIcon } from 'lucide-react'

interface Props {
  className?: string
}

export const Drawer: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const router = useRouter()

  const onClose = () => {
    router.back()
  }

  return (
    <div className="drawer__wrapper">
      <div onClick={onClose} className="drawer__overlay" />
      <div className={clsx('drawer__content', className)}>
        <button
          id="close-drawer-btn"
          aria-label="close drawer button"
          onClick={onClose}
          className="drawer__close-btn"
        >
          <ChevronLeftIcon size={16} /> back
        </button>
        {children}
      </div>
    </div>
  )
}
