import React from 'react'

import category1 from "../../assets/SP/SP/TaiNghe/MoondropQuarks2/vn-11134207-7r98o-lzh5aheatrj564.jpg"
import category2 from "../../assets/SP/SP/banphim/Logitech-G515-LightSpeed-TKL-Wireless-White/84607_ban_phim_co_logitech_g515_lightspeed_tkl_wireless_white_2.jpg"
import category3 from "../../assets/SP/SP/VGA/1660/76492_3060dual_owhite__1_.jpg"
import category4 from "../../assets/SP/SP/Mainboard/MainboardASROCK-B650M-Pro-RS-WIFI-DDR5/82274_mainboard_asrock_b650m_pro_rs_wifi_ddr5__2_.jpg"
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
