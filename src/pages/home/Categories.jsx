import React from 'react'

import category1 from "../../assets/TaiNghe/MoondropQuarks2/vn-11134207-7r98o-lzh5aheatrj564.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import category4 from "../../assets/category-4.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        { name: 'Headphone ', path: 'headphone', image: category1 },
        { name: 'Keyboard', path: 'keyboard', image: category2 },
        { name: 'VGA', path: 'vga', image: category3 },
        { name: 'Mainboard ', path: 'mainboard ', image: category4 },
    ]
    return (
        <>
            <div className='product__grid'>
                {
                    categories.map((category) => (
                        <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                            <img src={category.image} alt={category.name} />
                            <h4>{category.name}</h4>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Categories
