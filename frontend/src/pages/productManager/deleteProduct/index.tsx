import Head from 'next/head'
import React from 'react'

function deleteProduct() {
  return (
    <>
    <Head>
        <title> Gerenciador de Produtos</title>
    </Head>
    <div>
        Delete seu produto aqui!
        <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
            <select name="nome do produto" id="asdasd"></select>
            <input placeholder='Digite o preço do produto' type="text" />
            <input placeholder='Digite a quant. a inserir' type="text" />
            <button> Submeter </button>
        </div>
    </div>
    </>
  )
}

export default deleteProduct