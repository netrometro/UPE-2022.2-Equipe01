import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import React from 'react'
import { api } from '../../../services/apiClient'


import { toast } from 'react-toastify'
import { ProductContext } from '../../../contexts/Teste'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setquantity] = useState('')

  const [loading, setLoading] = useState(false)
  
  async function handleProductUp(event: FormEvent) {
     event.preventDefault()

     if(name === ''){
      toast.warning('Preencha todos os campos')
      return
     }

     setLoading(true)

     let data = {
      name
     }

    //  await addProduct(data)
     try{

        var response = await api.delete('/api/deleteproduct', {data})
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
        Delete seu produto aqui!
        <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
            <form onSubmit={handleProductUp}>
            <Input 
              placeholder='Digite o nome do produto'
              type="text"
              value={name}
              onChange={ (e) => setName(e.target.value) }
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

// import Head from 'next/head'
// import React from 'react'

// function deleteProduct() {
//   return (
//     <>
//     <Head>
//         <title> Gerenciador de Produtos</title>
//     </Head>
//     <div>
//         Delete seu produto aqui!
//         <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
//             <select name="nome do produto" id="asdasd"></select>
//             <input placeholder='Digite o preço do produto' type="text" />
//             <input placeholder='Digite a quant. a inserir' type="text" />
//             <button> Submeter </button>
//         </div>
//     </div>
//     </>
//   )
// }

// export default deleteProduct