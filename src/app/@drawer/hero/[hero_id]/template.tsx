import { Drawer } from '@/components/drawer'
import { PropsWithChildren } from 'react'
import './styles.css'

export default function HeroDetailsTemplate({ children }: PropsWithChildren) {
  return <Drawer className="hero__wrapper">{children}</Drawer>
}
