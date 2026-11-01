import CartItem from '@/component/CartItem'
import Container from '@/component/Container'
import React from 'react'

function Cart() {
  return (
    <Container>
      <h1 className='text-right my-4 font-bold'>سبد خرید</h1>
      <CartItem/>
   
      <div className='border shadow-md text-right p-4'>
        <h1 className='rtl'>قیمت کل:<span>77$</span></h1>
        <h1 className='rtl'><span>سود شما</span></h1>
        <h1 className='rtl'>قیمت نهایی:<span>77$</span></h1>
        <div>
          <button className='bg-sky-400 text-amber-50 rounded-2xl px-4 py-1 '>اعمال</button>
          <input className='rtl text-right border rounded-2xl' placeholder='کد تخفیف را دارد کنید'/>
        </div>
      </div>
  
    </Container>
  )
}

export default Cart