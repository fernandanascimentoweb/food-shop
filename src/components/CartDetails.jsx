import React, { useState, useEffect } from 'react'
import './cartstyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeToCart,removeSingleIteams,emptycartIteam } from '../redux/features/CartSlice';


const CartDetails = () => {

  const {carts} = useSelector((state) =>state.allCart);

  const [totalprice, SetPrice] = useState(0);
  const [totalquantity,setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = (e)=> {
    dispatch(addToCart(e));
  }

  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
    // funcao da msg
  }

  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e))
  }

  const emptycart = () => {
    dispatch(emptycartIteam());
    // msg adiccionar
  }

  const total = () =>{
    let totalprice = 0
    carts.map((ele,ind) =>{
      totalprice = ele.price * ele.qnty + totalprice
    });
    SetPrice(totalprice)
  }

  const countquantity = () =>{
    let totalquantity = 0
    carts.map((ele,ind) =>{
      totalquantity = ele.qnty + totalquantity
    });
    setTotalQuantity(totalquantity)
  }

  
  useEffect(()=>{
    total()
  },[total])

  useEffect(()=>{
    countquantity()
  },[countquantity])

  return (
    <>
      <section className='container'>
        <div className='cart-carrinho'>
          <h5>Pratos Selecionados {carts.length >0 ? `( ${carts.length} )`:""}</h5>
          {
            carts.length>0? <button onClick={emptycart}><i class="fa-solid fa-trash-can mr-2"></i>
            <span> Apagar Carrinho</span></button>: ""
          }
        </div>
        <div className='card-body'>
          {
            carts.length === 0 ? <table className='table'>
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className='card-frase'>
                      <i className='fa fa-shopping-cart'></i>
                      <p>Seu carrinho esta vazio</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>:
            <table className='table2'>
              <thead>
                <tr className='tr-table2'>  
                  <th>X</th>
                  <th>Prato</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Qtd</th>
                  <th className='text-right'><span>Total item</span></th>
                </tr>
              </thead>
              <tbody>
                {
                  carts.map((data,index) =>{
                    return(
                      <>
                        <tr>
                          <td className='btn-trash'>
                            <button onClick={()=>handleDecrement(data.id)}><i class="fa-solid fa-trash mr-2"></i></button>
                          </td>
                          <td>
                            <div className='product-img'>
                              <img src={data.imgdata} alt='' />
                            </div>
                          </td>
                          <td>
                            <div className='product-name'>
                              <p>{data.dish}</p>
                            </div>
                          </td>
                          <td>{data.price},00</td>
                          <td className='btn-input'>
                            <button className='btn-menos' type='button' onClick={data.qnty<=1 ?()=>handleDecrement(data.id):()=>handleSingleDecrement(data)}>
                              <i className='fa fa-minus'></i>
                            </button>
                            <input type="text" className='text-caixa' value={data.qnty} disabled name="" id="" />
                            <button className='btn-mais' type='button' onClick={()=>handleIncrement(data)}>
                              <i className='fa fa-plus'></i>
                            </button>
                          </td>
                          <td className='negrito'>
                            {data.qnty * data.price},00
                          </td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <th>&nbsp;</th>
                  <th colSpan={3}>&nbsp;</th>
                  <th>
                    <span className='text-danger'>Total de Item ( {totalquantity} ) </span>
                  </th>
                  <th className='text-right'>
                    <p>Total dos preços </p>
                    <span className='text-danger'>{totalprice},00</span>
                  </th>
                </tr>
              </tfoot>
            </table>
          }
        </div>
        
      </section>
    </>
  )
}

export default CartDetails