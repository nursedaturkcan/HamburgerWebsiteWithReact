import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner.jpg';

function home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Burger Eftelya</h1>
            <p>Delicious Hamburgers <br/> with Handmade</p>
            <Link to="/menu"> <button>Order Now</button></Link>
           
        </div>
    </div>
  )
}

export default home