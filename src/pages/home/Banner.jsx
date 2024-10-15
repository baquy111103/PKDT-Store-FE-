import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/all.png"

const Banner = () => {
    return (
        <div className='section__container header__container'>
            <div className='header__content z-30'>
                <h4 className='uppercase'>UP TO 20% DISCOUNT ON</h4>
                <h1>New Technology</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sequi, optio eius, neque consequatur dicta quibusdam commodi omnis quod corporis praesentium velit placeat assumenda voluptate rerum consequuntur aspernatur quia perferendis.</p>
                <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
            </div>
            <div className='header__image'>
                <img src={bannerImg} alt="banner image" />
            </div>
        </div>
    )
}

export default Banner
