import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Dashboard(){
    return (
        <>
        <Head>
            <title>Natubanho</title>
        </Head>
        <div>
            <Header />
            <h1>Painel</h1>
            <Footer />
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})