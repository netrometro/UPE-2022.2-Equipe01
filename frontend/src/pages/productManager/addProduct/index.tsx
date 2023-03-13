import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import React from 'react'

import { toast } from 'react-toastify'
import { AuthContext } from '../../../contexts/AuthContext'
import axios from 'axios'

function AddProduct() {
  // const { signIn } = useContext(AuthContext)

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const [loading, setLoading] = useState(false)

     try{

        var response = await api.post('/api/product', data)
        console.log(response);

      } catch(err) {
        console.log({err})
     }

  //   let data = {
  //     email,
  //     password
  //   }

  //   await signIn(data)

  //   setLoading(false)
  // }
  axios.post('/users', {
    name: 'John Doe',
    email: 'john@example.com',
  })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  
  return (
    <>
    <Head>
        <title> Gerenciador de Produtos</title>
    </Head>
    <div>
        Adicione seu produto aqui!
        <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
            <form onSubmit={handleProductUp}>
            <Input 
              placeholder='Digite o nome do produto'
              type="text"
              value={name}
              onChange={ (e) => setName(e.target.value) }
            />
            <Input
              placeholder='Digite o preço do produto'
              type="text"
              value={price}
              onChange={ (e) => setPrice(e.target.value) }
            />
            <Input
              placeholder='Digite a quant. a inserir'
              type="text"
              value={quantity}
              onChange={ (e) => setquantity(e.target.value) }
            />
            <Button
                type="submit"
                loading={false}
                >
                Cadastrar
            </Button>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddProduct