import axios from "axios";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Button } from "../../../components/ui/Button";

const GetProducts = () => {
const [products, setProducts] = useState([]);

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

return (
<>
    <div>
        <h1>Products</h1>
        {products.map((product, index) => (
        <div key={index}>
            <h2>{product.name}</h2>
            <p>ID: {product.id}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>

            <Link href={`/cart/addCart?id=${product.id}`} legacyBehavior>
                <Button type="button">Adicionar ao carrinho</Button>
            </Link>
        </div>
        ))}
    </div>
    <div>
        <Link href="/cart/getCart" legacyBehavior>
            <a>
                <button type="button">Ver carrinho</button>
            </a>
        </Link>
    </div>
</>
);
};

export default GetProducts;