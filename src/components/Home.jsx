import React, { useState } from 'react'
import logo from './logo.jpg';
import './cartstyles.css';
import CardsData from './CardData';
import { addToCart } from '../redux/features/CartSlice';
import { useDispatch } from 'react-redux';


const Home = () => {

    const [ cartData, setCartData ] = useState(CardsData);

    const dispatch = useDispatch();

    const send = (e) =>{
        dispatch(addToCart(e))
    }

  return (
    <>
        <section className='container'>
            <img src={logo} className='logo-top' alt="" />
            <h2>Restaurante On-line Aberto 𓌉◯𓇋 </h2>
            <div className='card'>
                {
                    cartData.map((element,index) => {
                        return (
                        <>
                            <div className='card-item'>
                                <img src={element.imgdata} className='card-img' alt="" />
                                <div className='card-text'>
                                    <h4>{element.dish}</h4>
                                    <span>3.8&nbsp; ★★★☆ {element.rating}</span>
                                </div>
                                <div className='card-text2'>
                                    <h5>{element.address}</h5>
                                    <span>R$ {element.price},00</span>
                                </div>
                                <div className='card-extra'>
                                    <img src={element.arrimg} alt="" />
                                    <button onClick={()=>send(element)} >Adicionar no carrinho</button>
                                    <img src={element.delimg} alt="" />
                                </div>
                            </div>
                        </>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Home