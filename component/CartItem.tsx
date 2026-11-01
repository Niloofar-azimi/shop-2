import React from 'react'

function CartItem() {
  return (
        <div className='grid grid-cols-12 mb-4'>
        <div className='bg-gray-500 col-span-10 text-right p-4 text-lg '>
          <h1>اسم محصول</h1>
          <p>تعداد:<span>2</span></p>
          <p className='rtl'>قیمت:<span>15$</span></p>
               <div className='m-7'>
                   <button className='px-4 py-2 bg-gray-700 text-white rounded-2xl'>+</button>
                <span className='mx-4'>3</span>
                        <button className='px-4 py-2 bg-gray-700 text-white rounded-2xl'>-</button>
     </div>

        </div>
        <div className='col-span-2'>
          <img src="/image/photo_2026-10-24_12-39-04.jpg" />
        </div>
      </div>
    
  )
}

export default CartItem