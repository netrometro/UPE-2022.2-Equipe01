import axios from "axios";
import { useEffect, useState } from "react";

const GetCart = () => {
const [cart, setCart] = useState([]);

useEffect(() => {
axios
    .get('http://localhost:3333/api/getcart')
    .then((response) => {
    setCart(response.data);
    })
    .catch((error) => {
    console.log(error);
    });
    }, []);

return (
<div>
    <h1>Lista do carrinho:</h1>
    {cart.map((cart, index) => (
    <div key={index}>
        <h2>{cart.product.name}</h2>
        <p>. ID do produto : {cart.productId}</p>
        <p>. Preço: {cart.product.price}</p>
    </div>
    ))}
</div>
);
};

export default GetCart;