import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Link from 'next/link' 
import { Button } from "../../../components/ui/Button";
import { setupAPIClient } from "../../../services/api";
import { toast } from "react-toastify";
import { api } from "../../../services/apiClient";
import Header from "../../../components/Header";

import styles from './styles.module.scss'

const GetProducts = () => {
const [products, setProducts] = useState([]);

// const [count, setCount] = useState<number[]>([0,0]);

// function increaseCount(index: number) {
//     setCount(numbers => {
//         const newState = [...numbers];
//         newState[index]++;
//         return newState;
//     });

// }

// function decreaseCount(index: number) {
//     if (count[index] > 0) {
//         setCount(numbers => {
//             const newState = [...numbers]
//             newState[index]--;
//             return newState;
//         });
//   };
// }

useEffect(() => {
axios
    .get('http://localhost:3333/api/getproducts')
    .then((response) => {
    setProducts(response.data);
})
.catch((error) => {
    console.log(error);
});
}, []);

// async function handleUpdate() {
//     // event.preventDefault()

//     const id =products.map((product) => (
//         product.id
//     ))
//     const nome =products.map((product) => (
//         product.name
//     ))
//     const price =products.map((product) => (
//         product.price
//     ))
//     const quantity =products.map((product, index) => (
//         product.quantity - count[index]
//     ))

//     const apiClient = setupAPIClient()

//     const produto = {
//         id: Number(id),
//         name: String(nome),
//         price: Number(price),
//         quantity: Number(quantity)
//     }

//     let data = {
//         productId: Number(id),
//         quantity: Number(count),
//         price: Number(produto.price)
//         // price: Number(produto.price*count)
//      }
    

//     if (produto.quantity < 0) {
//         toast.error("Quantidade inválida!")
//     } else{
//         await apiClient.put('/api/updateproduct', produto)

//         try{

//             var response = api.post('/api/addcart', data)
//             console.log(response);
//             toast.success('Adicionado ao carrinho!')
    
//           } catch(err) {
//             console.log({err})
//          }
    
//     }
    
    
// }

return (
<>
    <div>
        <h1>Catálogo de Produtos</h1>
        {products.map((product, index) => (
        <div key={index}>
            <h2>{product.name}</h2>
            {/* <p>ID: {product.id}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p> */}
                
            {/* <Button id="btn" type="button" onClick={handleUpdate}>Adicionar ao carrinho</Button>

            <button type="button" onClick={() => decreaseCount(index)}>
            -
            </button>
            <span>{count[index]}</span>
            <button type="button" onClick={() => increaseCount(index)}>
            +
            </button> */}

            <Link href={`/productManager/getProductId?id=${product.id}`} legacyBehavior>
                <Button type="button">Mais informações</Button>
            </Link>
        </div>
        ))}
        
        
    </div>

    {/* <div>
        <Link href="/cart/getCart" legacyBehavior>
            <a>
                <button type="button">Ver carrinho</button>
            </a>
        </Link>
    </div> */}
</>
);
};

export default GetProducts;