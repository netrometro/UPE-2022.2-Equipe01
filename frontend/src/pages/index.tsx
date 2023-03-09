import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'

import { Input } from '../components/ui/Input/index'
import { Button } from '../components/ui/Button'

import logoImg from '../../public/logo.svg'

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Natubanho - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="natubanho" />

       <div className={styles.login}>
          <form>
             <Input
                placeholder='Digite seu e-mail'
             />
             <Input
                placeholder='Digite sua senha'
             />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>

          </form>

          <Link href="/signup">
            <span className={styles.text}>Não possui uma conta? Cadastre-se</span>
          </Link>

       </div>
      </div>
    </>
  )
}
