import axios from "axios";
import { useEffect, useState } from "react";

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
<div>
    <h1>Products</h1>
    {products.map((product, index) => (
    <div key={index}>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
    </div>
    ))}
</div>
);
};

export default GetProducts;