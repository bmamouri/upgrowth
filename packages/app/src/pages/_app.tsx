import App from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {

    public render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <title>{''}</title>
                    <link href={'/static/style.css'} rel='stylesheet'/>
                    {/*<link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png'/>*/}
                    {/*<link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png'/>*/}
                    {/*<link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png'/>*/}
                    {/*<link rel='manifest' href='/static/site.webmanifest'/>*/}
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}