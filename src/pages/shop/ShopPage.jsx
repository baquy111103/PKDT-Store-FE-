import React, { useEffect, useState } from 'react'

import productsData from '../../data/products.json'
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['all', 'accessories', 'laptop', 'smartphone', 'PC'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '50$ - 100$', min: 50, max: 100 },
        { label: '100$ - $200', min: 100, max: 200 },
        { label: '200$ and above', min: 200, max: Infinity },
    ]
}



const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        categories: 'all',
        color: 'all',
        priceRanges: ''
    });

    //filltering function
    const applyFilters = () => {
        let filteredProducts = productsData;

        //filter by categories
        if (filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category)
        }

        //filter by color
        if (filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filtersState.color)
        }

        //filter by price range
        if (filtersState.priceRanges) {
            const [minPrice, maxPrice] = filtersState.priceRanges.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }

        setProducts(filteredProducts)

    }

    useEffect(() => {
        applyFilters()
    }, [filtersState])

    //clear
    const clearFilters = () => {
        setFiltersState({
            categories: 'all',
            color: 'all',
            priceRanges: ''
        })
    }

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dignissimos minus eaque adipisci dolores. Odio temporibus accusamus tempora est quis, culpa cumque cum nihil pariatur repudiandae totam et voluptates autem!</p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* Left side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters} />

                    {/* Right side */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Product Available :{products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopPage
