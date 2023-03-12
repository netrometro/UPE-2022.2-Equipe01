import Head from 'next/head'
import React from 'react'

function addProduct() {
  return (
    <>
    <Head>
        <title> Gerenciador de Produtos</title>
    </Head>
    <div>
        Adicione seu produto aqui!
        <div style={{ display: 'flex', flexDirection: 'column', width: 200}}>
            <input placeholder='Digite o nome do produto' type="text" />
            <input placeholder='Digite o preço do produto' type="text" />
            <input placeholder='Digite a quant. a inserir' type="text" />
            <button> Submeter </button>
        </div>
    </div>
    </>
  )
}

export default addProduct