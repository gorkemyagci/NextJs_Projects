import Head from 'next/head'
import React from 'react'
import _productdetails from './_productdetails'

const index = () => {
    return (
        <>
        <Head>
            <title>Product</title>
            <meta name='description' content='Product'/>
        </Head>
        <_productdetails/>
        </>
    )
}

export default index