import { Input } from '@/components/input';
import './styles.css'
import Image from "next/image";
import { SearchIcon } from '@/assets/icons/SearchIcon';
import { Button } from '@/components/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="home__wrapper">
      <div className='home__content'>
        <h1 className="home__title">Hero Search</h1>
        <p className="home__description mb-4 lg:mb-8">
          Encontre todas as informações que você deseja saber sobre os
          personagens do Universo Marvel!  
        </p>

        <div className="home__search-container">
          <Input 
            wrapperClassName="flex-1"
            leftContent={<SearchIcon size={16} />}
            placeholder='Pesquise o nome aqui'
          />
          <Button>Buscar</Button>
        </div>

        <p className='home__view-all-heroes'>
          Deseja ver todos os personagens? <Link href="/heroes" className='home__view-all-heroes__link'>Clique aqui</Link>
        </p>
      </div>

      <Image 
        src="/images/lego-spider-man.svg"
        alt="Lego spider man"
        width={700}
        height={700}
        className="home__image"
      />
    </main>
  )
}
