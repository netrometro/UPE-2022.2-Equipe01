// import axios from "axios";
// import { useEffect, useState } from "react";
// import Link from 'next/link' 
// import { Button } from "../../../components/ui/Button";

// const GetProducts = () => {
// const [products, setProducts] = useState([]);

// useEffect(() => {
// axios
//     .get('http://localhost:3333/api/getproducts')
//     .then((response) => {
//     setProducts(response.data);
//     })
//     .catch((error) => {
//     console.log(error);
//     });
//     }, []);

// return (
// <>
//     <div>
//         <h1>Products</h1>
//         {products.map((product, index) => (
//         <div key={index}>
//             <h2>{product.name}</h2>
//             <p>ID: {product.id}</p>
//             <p>Price: {product.price}</p>
//             <p>Quantity: {product.quantity}</p>

//             <Link href={`/productManager/getProductId/${product.id}`} legacyBehavior>
//                 <Button type="button">Mais informações</Button>
//             </Link>

//             <Link href={`/cart/addCart?id=${product.id}`} legacyBehavior>
//                 <Button type="button">Adicionar ao carrinho</Button>
//             </Link>
//         </div>
//         ))}
//     </div>
//     <div>
//         <Link href="/cart/getCart" legacyBehavior>
//             <a>
//                 <button type="button">Ver carrinho</button>
//             </a>
//         </Link>
//     </div>
// </>
// );
// };

// export default GetProducts;



import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Link from 'next/link' 
import { Button } from "../../../components/ui/Button";
import { setupAPIClient } from "../../../services/api";
import { toast } from "react-toastify";
import { api } from "../../../services/apiClient";
import { randomBytes } from "crypto";

const GetProducts = () => {
const [products, setProducts] = useState([]);

const [count, setCount] = useState(0);

function addSaboneteAroeira() {
    setCount(count + 1);

}

function decreaseSaboneteAroeira() {
    if (count > 0) {
        setCount(count - 1);
  };
}

const [count1, setCount1] = useState(0);

function addSaboneteAroeira2() {

    setCount1(count1 + 1);

}

function decreaseSaboneteAroeira2() {

    if (count1 > 0) {
        setCount1(count1 - 1);
    }
};


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

            <Link href={`/productManager/getProductId/${product.id}`} legacyBehavior>
                <Button type="button">Mais informações</Button>
            </Link>

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