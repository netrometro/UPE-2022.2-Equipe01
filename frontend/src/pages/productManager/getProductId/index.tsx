import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { api } from '../../../services/apiClient';
import axios from 'axios';

interface iProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    categoryId: number;
}

const ProductId = () => {

    const [product, setProduct] = useState<iProduct> ();
    const [test, setTest] = useState("Testando");

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

        
    }

    return (
        <>
            <h3>Listar item específico</h3>
            <button onClick={getProductById}>teste</button>
        </>
    )
}

export default ProductId;
