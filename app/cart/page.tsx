"use client"
import CartItem from '@/component/CartItem'
import Container from '@/component/Container'
import { IProductItemProps } from '@/component/ProductItem'
import { useShoppingCreatContext } from '@/context/ShoppingCartContext'
import { formatNumberWithCommas } from '@/Utils/Number'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface IDiscountData{"id":number;"code":string;"percentage":number}




function Cart() {
  const {cartItem}=useShoppingCreatContext();
    const[data,setData]=useState<IProductItemProps[]>([]);
    const[discountedPrice,setDiscountedPrice]=useState(0);
    const [finalPrice,setFinalPrice]=useState(0);
    const totalPrice=cartItem.reduce((total,item)=>{
              const selectProduct=data.find((product)=>product.id==item.id.toString())
              return total+(selectProduct?.price||0)*item.qty

            },0);
      const[discountCode,setDiscountCode]=useState("");
      const handleSubmitDiscount=()=>{
        axios(`http://localhost:3001/discount?code=${discountCode}`).then(
          (result)=>{
            const data=result.data as IDiscountData[];
            const discountedPrice=totalPrice* data[0].percentage/10;
            const finalPrice=totalPrice - discountedPrice;
            setDiscountedPrice(discountedPrice);
            setFinalPrice(finalPrice);

          }
        )
      }
  useEffect(()=>{
    axios(`http://localhost:3001/product`).then(result=>{
      const {data}=result
      setData(data);
    })
  },[])
  
  return (
    <Container>
      <h1 className='text-right my-4 font-bold'>سبد خرید</h1>
      <div>
        {cartItem.map((item)=>(
           <CartItem key={item.id} {...item}/>

        ))}
       
      </div>
   
      <div className='border shadow-md text-right p-4'>
        <h1 className='rtl'>قیمت کل:
          <span>
            {formatNumberWithCommas(totalPrice )
           }$
            </span></h1>
        <h1 className='rtl'><span>سود شما</span>{formatNumberWithCommas(discountedPrice)}</h1>
        <h1 className='rtl'>قیمت نهایی:<span>{formatNumberWithCommas(finalPrice)}</span></h1>
        <div>
          <button onClick={handleSubmitDiscount} className='bg-sky-400 text-amber-50 rounded-2xl px-4 py-1 '>اعمال</button>
          <input
           className='rtl text-right border rounded-2xl'
            placeholder='کد تخفیف را دارد کنید'
            onChange={(e)=>setDiscountCode(e.target.value)}/>
        </div>
      </div>
  
    </Container>
  )
}

export default Cart