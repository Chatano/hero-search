import Image from 'next/image'
import Link from 'next/link'
import './styles.css'

const tabs = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/heroes',
    label: 'Heroes',
  },
]

export const Header = () => {
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
            <li key={tab.path} className="header__tabs__item">
              <Link href={tab.path}>{tab.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
