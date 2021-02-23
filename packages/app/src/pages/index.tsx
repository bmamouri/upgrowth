import Head from 'next/head';
import {Header, Main, SearchForm} from '../components';

export default function Homepage() {
    return (
        <>
            <Head>
                <title>Upgrowth Image Search</title>
            </Head>

            <Header/>
            <Main>
                <h1>Welcome to Our Little Image Search</h1>
                <SearchForm/>
            </Main>
        </>
    )
}