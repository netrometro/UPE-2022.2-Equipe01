import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import Image from 'next/image'

import { Input } from '../../components/ui/Input/index';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/ui/Select';

import logoImg from '../../../public/logo.svg'

import Link from 'next/link';
import { useState } from 'react'

export default function SignUp() {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="natubanho" />

       <div className={styles.login}>
            <h1>Criando sua conta</h1>

            <form>
                <Input
                    placeholder='Digite o seu nome'
                    type="text"
                />
                <Input
                    placeholder='Digite seu e-mail'
                    type="text"
                />
                <Input
                    placeholder='Digite sua senha'
                    type="password"
                />
                <Select
                    options={['Cliente', 'Gerente', 'Admin']}
                    onChange={handleOptionChange}
                />

                <Button
                type="submit"
                loading={false}
                >
                Cadastrar
                </Button>

            </form>

            <Link href="/">
                <span className={styles.text}>Já possui uma conta? Faça login!</span>
            </Link>

       </div>
      </div>
    </>
  )
}
