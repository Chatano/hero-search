import { Drawer } from '@/components/drawer'
import './styles.css'

export default async function HeroDetailsDrawer() {
  return (
    <Drawer className="hero__wrapper">
      <h1 className='favs__title'>My Favorites</h1>
    </Drawer>
  )
}
