import { createContext, ReactNode, useState } from 'react'

import { api } from '../services/apiClient'

import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { RoleEnum } from '../models/enum/RoleEnum'

import { toast } from 'react-toastify'

type ProductContextData = {
    // product: ProductProps;
    addProduct: (credentials: AddProductProps) => Promise<void>;
    // delProduct: (credentials: DelProductProps ) => Promise<void>;
}

// type ProductProps = {
//     id: string;
//     name: string;
//     price: string;
//     quantity: string;
// }

type AddProductProps = {
    name: string;
    price: number;
    quantity: number;
}

// type DelProductProps = {
//     name: string;
// }

type AuthProviderProps = {
    children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    // const [user, setUser] = useState<ProductProps>()
    // const isAuthenticated = !!user;

    async function addProduct({ name, price, quantity }: AddProductProps) {
        try{
            const response = await api.post('/api/product', {
                name,
                price,
                quantity
            })

            toast.success('Produto cadastrado com sucesso!');

        } catch(err) {
            toast.error('Não foi possível cadastrar um produto!');
        }

            //console.log(response.data)
        //     const { token } = response.data
        //     setCookie(undefined, 'nextauth', token, {
        //         maxAge: 60 * 60 * 24 * 30, // expirar em 1 mes
        //         path: '/'
        //     })

        //     api.defaults.headers['Authorization'] = `Bearer ${token}`
        //     //console.log(token)

        //     toast.success('Logado com sucesso!')

        //     Router.push('/dashboard')

        // }catch(err){
        //     toast.error('Erro ao acessar')
        //     console.log('erro ao acessar', err)
        // }
    }

    // async function signUp({ name, email, password, roleEnum }: DelProductProps) {
    //     try{

    //         const response = await api.post('/api/users', {
    //             name,
    //             email,
    //             password,
    //             roleEnum
    //         })

    //         toast.success('Conta criada com sucesso!')

    //         Router.push('/')

    //     }catch(err){
    //         toast.error('Erro ao cadastrar!')
    //     }
    // }

    return (
        <ProductContext.Provider value={{ addProduct }}>
            {children}
        </ProductContext.Provider>

    )
}