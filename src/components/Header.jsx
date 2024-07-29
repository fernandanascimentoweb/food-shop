import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = () => {

  const {carts} = useSelector((state)=>state.allCart);

  return (
    <>
        <nav>
            <Link to="/" >
                <h3>Food Shopping 𓌉◯𓇋 </h3>
            </Link>
            <Link to="/cart" >
                <i class="fa-solid fa-cart-shopping"></i>
                <span>{carts.length}</span>
            </Link>
        </nav>
    </>
  )
}

export default Header