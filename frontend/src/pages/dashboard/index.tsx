import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GetProducts from '../productManager/getProducts';
import SelectList from '../../components/SelectList';

export default function Dashboard(){
    return (
        <>
        <Head>
            <title>Natubanho</title>
        </Head>
        <div>
            <Header />
            <SelectList/>
            <GetProducts/>
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