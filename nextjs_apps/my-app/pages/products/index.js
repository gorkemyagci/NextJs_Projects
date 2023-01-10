import React from 'react'
import Image from 'next/image'
import next from '../../public/Unknown.png'

const Products = ({ products }) => {
    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div>
                            Product Name: {product.name}
                            Price: {product.price}
                        </div>
                    )
                })
            }
            <div style={{
                position:"relative",
                width:"100px",
                height:"100px"
            }}>
                <Image
                    src="https://miro.medium.com/max/1400/1*htbUdWgFQ3a94PMEvBr_hQ.webp"
                    layout="fill"
                />
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();
    return {
        props: {
            products
        }
    }
}

export default Products