import { useRouter } from 'next/router';
import React from 'react'
import { api } from '../../../services/apiClient';
import axios from 'axios';

const ProductId = () => {
    const router = useRouter();
    const { id } = router.query;

    async function getProductById() {
        let data = {
            id: Number(2)
        }

        try{
            const response = await api.get('/api/getproductid', {data});
            console.log(response);
        } catch(err) {
            console.log(err)
        }

        
    }

    return (
        <>
            <h3>Listar item específico</h3>
            <button onClick={getProductById}>teste</button>
        </>
    )
}

export default ProductId;
