import { createContext, ReactNode, useState, useEffect } from 'react'

import { api } from '../services/apiClient'

import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { RoleEnum } from '../models/enum/RoleEnum'

import { toast } from 'react-toastify'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps ) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    roleEnum: RoleEnum;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
    roleEnum: RoleEnum;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try{
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    }catch{
        console.log('erro ao deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    useEffect(() => {

        // tentar pegar o cookie
        const { '@nextauth.token': token } = parseCookies()

        if(token){
            api.get('/me').then(response => {
                const { id, name, email, roleEnum } = response.data

            setUser({
                id,
                name,
                email,
                roleEnum
            })

            })
            .catch(() => {
                // se deu erro desloga
                signOut()
            })
        }

    }, [])

    async function signIn({ email, password }: SignInProps) {
        try{
            const response = await api.post('/api/login', {
                email,
                password
            })

            //console.log(response.data)
            const { token } = response.data
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // expirar em 1 mes
                path: '/'
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`
            //console.log(token)

            toast.success('Logado com sucesso!')

            Router.push('/dashboard')

        }catch(err){
            toast.error('Erro ao acessar')
            console.log('erro ao acessar', err)
        }
    }

    async function signUp({ name, email, password, roleEnum }: SignUpProps) {
        try{

            const response = await api.post('/api/users', {
                name,
                email,
                password,
                roleEnum
            })

            toast.success('Conta criada com sucesso!')

            Router.push('/')

        }catch(err){
            toast.error('Erro ao cadastrar!')
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>

    )
}