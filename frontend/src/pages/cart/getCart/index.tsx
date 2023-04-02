import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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


    function gerarPdf() {

        const doc = new jsPDF("portrait","mm",[597,410]);
    

        doc.setFont('bolditalic')
        doc.setFontSize(15)
        doc.setTextColor(136,84,207)
        doc.setFont(undefined, 'bold')
    
        doc.text('Produtos', 20, 20);
        var incrementador = 1;
        cart.forEach((item, index) => {
            doc.text(`Nome: ${item.product.name}, Quantidade: ${item.quantity} unidades, Preço: ${item.price}, Id do Produto: ${item.product.id}`,20, 40 + index * 10)
            incrementador++
        });  doc.output("dataurlnewwindow")
        }

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
    <Link href="/productManager/getProduct" legacyBehavior>
        <a>
            <button type="button">Adicionar mais produtos</button>
        </a>
    </Link>
        <a>
            <button type="button">Finalizar compra</button>
        </a>
</div>
);
};

export default GetCart;