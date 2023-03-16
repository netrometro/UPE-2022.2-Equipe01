import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import React from 'react'
import { api } from '../../../services/apiClient'


import { toast } from 'react-toastify'
import { ProductContext } from '../../../contexts/Teste'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'

// TESTE
//TEstando

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setquantity] = useState('')

  const [loading, setLoading] = useState(false)
  
  async function handleProductUp(event: FormEvent) {
     event.preventDefault()

     if(name === '' || price === '' || quantity === ''){
      toast.warning('Preencha todos os campos')
      return
     }

     setLoading(true)

     let data = {
      name,
      price: Number(price),
      quantity: Number(quantity)
     }

    //  await addProduct(data)
     try{

        var response = await api.post('/api/product', data)
        console.log(response);
        
      } catch(err) {
        console.log({err})
     }


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