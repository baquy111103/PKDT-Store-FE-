import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import products from "../../data/products.json"
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) => product.category === categoryName.toLowerCase());

        setFilteredProducts(filtered);
    }, [categoryName])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>{categoryName}</h2>
                <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dignissimos minus eaque adipisci dolores. Odio temporibus accusamus tempora est quis, culpa cumque cum nihil pariatur repudiandae totam et voluptates autem!</p>
            </section>

            {/* Products Card */}
            <div className='section__container'>
                <ProductCards products={filteredProducts} />
            </div>
        </>
    )
}

export default CategoryPage
