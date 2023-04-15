import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext, signOut } from '../../contexts/AuthContext';

export default function Header() {

  const { signOut } = useContext(AuthContext)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/dashboard'>
          <img src="/logo.svg" width={190} height={60} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href='/category' legacyBehavior>
            <a>Adicionar categoria</a>
          </Link>

          <Link href='/productManager/addProduct' legacyBehavior>
            <a>Adicionar produto</a>
          </Link>

          <Link href='/cart/getCart' legacyBehavior>
            <a>Carrinho</a>
          </Link>

          <Link href='/' legacyBehavior>
            <a>Vazio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color='#000' size={24}/>
          </button>
        </nav>
      </div>
    </header>
  )
}