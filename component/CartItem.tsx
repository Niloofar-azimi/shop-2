import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IProductItemProps } from './ProductItem';
import AddToCart from './addToCart';
interface ICartItemsProps{
  id:number,
  qty:number

}

function CartItem({id,qty}:ICartItemsProps) {
  const[data,setData]=useState({} as IProductItemProps);
  useEffect(()=>{
    axios(`http://localhost:3001/${id}`).then(result=>{
      const {data}=result
      setData(data);
    })
  },[id])
  return (
        <div className='grid grid-cols-12 mb-4'>
        <div className='bg-gray-500 col-span-10 text-right p-4 text-lg '>
          <h1>{data.title}</h1>
          <p>تعداد:<span>{qty}</span></p>
          <p className='rtl'>قیمت:<span>{data.price}</span></p>
         <AddToCart id={id.toString()}/>
        </div>
        
          <img src={data.image}
          className='col-span-2' />
        
      </div>
    
  )
}

export default CartItem