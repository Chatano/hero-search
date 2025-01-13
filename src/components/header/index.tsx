'use client'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const tabs = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/heroes',
    label: 'Heroes',
  },
  {
    path: '/favs',
    label: 'Favorites',
  },
]

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className="header__wrapper">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Marvel Logo"
          width={102}
          height={41}
          className="object-contain"
        />
      </Link>

      <nav>
        <ul className="header__tabs">
          {tabs.map((tab) => (
            <li
              key={tab.path}
              className={clsx(
                'header__tabs__item',
                pathName === tab.path && 'active',
              )}
            >
              <Link href={tab.path}>{tab.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
