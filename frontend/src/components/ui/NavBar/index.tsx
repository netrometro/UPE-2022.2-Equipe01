import Link from 'next/link'

import styles from './styles.module.scss'

import logoImg from '../../public/logo.svg'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Natubanho</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}