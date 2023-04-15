import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

interface iProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  categoryId: number;
}

function SelectList() {
  const [selectedOption, setSelectedOption] = useState('');
  const [products, setProducts] = useState<iProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedOption) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await axios.get<iProduct[]>(`http://localhost:3333/api/getbycategory/${selectedOption}`);
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <>
      <div>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Selecione uma opção</option>
          <option value="1">Sabonete</option>
          <option value="2">Shampoo</option>
          <option value="3">Hidratante</option>
        </select>
      </div>

      <div>
        <h1>Catálogo de Produtos</h1>

        {loading && <p>Carregando...</p>}
        {!loading && products.length === 0 && <p>Nenhum produto encontrado.</p>}
        {!loading && products.length > 0 && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>Preço: R${product.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SelectList;