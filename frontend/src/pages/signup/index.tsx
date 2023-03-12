import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import Image from 'next/image'

import { Input } from '../../components/ui/Input/index'
import { Button } from '../../components/ui/Button'
import { Select } from '../../components/ui/Select'

import logoImg from '../../../public/logo.svg'

import Link from 'next/link'

import { RoleEnum } from '../../models/enum/RoleEnum'

import { AuthContext } from '../../contexts/AuthContext'

import { toast } from 'react-toastify'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [roleEnum, setRoleEnum] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
     event.preventDefault()

     if(name === '' || email === '' || password === ''){
      toast.warning('Preencha todos os campos')
      return
     }

     setLoading(true)

     let data = {
      name,
      email,
      password,
      roleEnum: roleEnum as RoleEnum
     }

     await signUp(data)

     setLoading(false)

  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="natubanho" />

       <div className={styles.login}>
            <h1>Criando sua conta</h1>

            <form onSubmit={handleSignUp}>
                <Input
                    placeholder='Digite o seu nome'
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />
                <Input
                    placeholder='Digite seu e-mail'
                    type="text"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <Input
                    placeholder='Digite sua senha'
                    type="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <Select className={styles.select}
                  options={[
                    RoleEnum.ADMIN,
                    RoleEnum.CLIENTE,
                    RoleEnum.GERENTE,
                  ]}
                  value={roleEnum}
                  onChange={(e) => setRoleEnum(e.target.value)}
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
