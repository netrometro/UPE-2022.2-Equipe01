import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { api } from '../../../services/apiClient';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setupAPIClient } from '../../../services/api';
import { Button } from '../../../components/ui/Button';
import Header from '../../../components/Header';

interface iProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    categoryId: number;
}

const ProductId = () => {

    const [product, setProduct] = useState<iProduct> ();
    
    const [count, setCount] = useState(0);

    const router = useRouter();
    const { id } = router.query;

    let data = {
        id: Number(id)
    }

    
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                console.log(data)
                const result = await axios.get<iProduct> (`http://localhost:3333/api/getproducts/${id}`);
                console.log(result.data);
                setProduct(result.data);
            } catch(error) {
                console.log("Deu erro")
                console.log(error);
            }
        };
        
        fetchProduct();
        
    }, []);

    function increaseCount() {
        setCount(count + 1);

    }

    function decreaseCount() {
        if (count > 0) {
            setCount(count - 1);
    };
    }

    async function handleUpdate() {
    
        const id = product.id

        const nome = product.name

        const price =  product.price

        const quantity = product.quantity - count
    
        const apiClient = setupAPIClient()
    
        const produto = {
            id: Number(id),
            name: String(nome),
            price: Number(price),
            quantity: Number(quantity)
        }
    
        let data = {
            productId: Number(id),
            quantity: Number(count),
            price: Number(produto.price*count)
            }
        
    
        if (produto.quantity < 0) {
            toast.error("Quantidade inválida!")
        } else{
            await apiClient.put('/api/updateproduct', produto)
    
            try{
    
                var response = api.post('/api/addcart', data)
                console.log(response);
                toast.success('Adicionado ao carrinho!')
        
            } catch(err) {
                console.log({err})
            }
        
        }
        
        
    }
        
    return (
        <div>
            <Header/>
            <h2>{product?.name}</h2>
            <p>ID: {product?.id}</p>
            <p>Price: {product?.price}</p>
            <p>Quantity: {product?.quantity}</p>

            <Button id="btn" type="button" onClick={handleUpdate}>Adicionar ao carrinho</Button>

            <button type="button" onClick={decreaseCount}>
            -
            </button>
            <span>{count}</span>
            <button type="button" onClick={increaseCount}>
            +
            </button>
        </div>
    )
}

export default ProductId;
