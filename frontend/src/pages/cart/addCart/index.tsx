import { useState, FormEvent, useContext, useEffect } from 'react'

import Head from 'next/head'
import React from 'react'
import { api } from '../../../services/apiClient'


import { toast } from 'react-toastify'
// import { ProductContext } from '../../../contexts/Teste'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { type } from 'os'

export default function AddCart() {

  const [productId, setProductId] = useState('')

  const router = useRouter();
  const { id } = router.query;

  async function handleProductUp(event: FormEvent) {
     let data = {
        productId: Number(id)
     }

     try{

        var response = api.post('/api/addcart', data)
        console.log(response);
        toast.success('Produto cadastrado com sucesso!')

      } catch(err) {
        console.log({err})
     }

  }

  return (
    <>
    <Head>
        <title>Criar um carrinho</title>
    </Head>
    <div>
        Confime a adição do produto!
        
        <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
            <form onSubmit={handleProductUp}>
            <Button
                type="submit"
                loading={false}
                >
                Submeter
            </Button>
            </form>
        </div>
        <Link href="/cart/getCart" legacyBehavior>
            <a>
                <button type="button">Ver carrinho</button>
            </a>
        </Link>
        <Link href="/productManager/getProduct" legacyBehavior>
            <a>
                <button type="button">Adicionar mais produtos</button>
            </a>
        </Link>
    </div>
    </>
  )
}













// export default function AddCart() {

//   const [productId, setProductId] = useState('')

//   const [loading, setLoading] = useState(false)
// async function handleProductUp() {
//   async function handleProductUp(event: FormEvent) {
//      event.preventDefault()

//      if(productId === ''){
//       toast.warning('Preencha todos os campos!')
//       return
//      }

//     //  setLoading(true)

//      let data = {
//         productId: Number(productId)
//      }

//     //  await addProduct(data)
//      try{

//         var response = api.post('/api/addcart', data)
//         console.log(response);
//         toast.success('Produto cadastrado com sucesso!')

//       } catch(err) {
//         console.log({err})
//      }


//     //  setLoading(false)

//   }
  
//   return (
//     <>
//     <Head>
//         <title>Criar um carrinho</title>
//     </Head>
//     <div>
//         Crie seu carrinho aqui!
//         <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
//             <form onSubmit={handleProductUp}>
//             <Input 
//               placeholder='Digite o id do produto'
//               type="text"
//               value={productId}
//               onChange={ (e) => setProductId(e.target.value) }
//             />
//             <Button
//                 type="submit"
//                 loading={false}
//                 >
//                 Submeter
//             </Button>
//             </form>
//         </div>
//         <Link href="/cart/getCart" legacyBehavior>
//             <a>
//                 <button type="button">Ver carrinho</button>
//             </a>
//         </Link>
//     </div>
//     </>
//   )
// }}