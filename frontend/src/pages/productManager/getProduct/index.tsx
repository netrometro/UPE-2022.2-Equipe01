import { useState, useEffect, FormEvent, useContext } from 'react'

import Head from 'next/head'
import React from 'react'
import { api } from '../../../services/apiClient'


import { toast } from 'react-toastify'
import { ProductContext } from '../../../contexts/Teste'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'


export default function AddProduct() {

  const [name, getName] = useState('')
  const [price, getPrice] = useState('')
  const [quantity, setquantity] = useState('')

  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([]);
  
  async function handleProductUp(event: FormEvent) {
     event.preventDefault()

     useEffect(()=>{
         try{
            let data = {
                name,
                price: Number(price),
                quantity: Number(quantity)
               }

            var response = api.get('/api/getproducts')
            console.log(response);
            
          } catch(err) {
            console.log({err})
         }
     setLoading(true)

     })
    //  await addProduct(data)


     setLoading(false)

  }
  
  return (
    // <>
    // <Head>
    //     <title> Gerenciador de Produtos</title>
    // </Head>
    // <div>
    //     Veja seus produtos aqui!
    //     <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
    //         <form onSubmit={handleProductUp}>           

    //         </form>
    //     </div>
    // </div>
    // </>
    <div>
  Veja seus produtos aqui!
  <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
    <form onSubmit={handleProductUp}>
      <Button type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Listar Produtos'}
      </Button>
    </form>

    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

    
  )
}