import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import React from 'react'

import { toast } from 'react-toastify'
import { AuthContext } from '../../../contexts/AuthContext'

function AddProduct() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if(email == '' || password === ''){
      toast.warning('Preencha todos os campos')
      return
    }

    setLoading(true)

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false)
  }
  
  return (
    <>
    <Head>
        <title> Gerenciador de Produtos</title>
    </Head>
    <div>
        Adicione seu produto aqui!
        <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
            <input placeholder='Digite o nome do produto' type="text" />
            <input placeholder='Digite o preço do produto' type="text" />
            <input placeholder='Digite a quant. a inserir' type="text" />
            <button> Submeter </button>
        </div>
    </div>
    </>
  )
}

export default AddProduct