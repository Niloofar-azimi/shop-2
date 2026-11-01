"use client"

import { useShoppingCreatContext } from "@/context/ShoppingCartContext"
interface IAddToCartProps{
  id:string;
}

function AddToCart({id}:IAddToCartProps) {
    const{cartItem,handleIncreaseProductQty}=useShoppingCreatContext();
    console.log("AddToCart rendered");
console.log(cartItem);
  return (
       <div>
                   <button  onClick={()=>handleIncreaseProductQty(parseInt(id))}  className='px-4 py-2 bg-gray-700 text-white rounded-2xl'>+</button>
                <span className='mx-4'>3</span>
                        <button className='px-4 py-2 bg-gray-700 text-white rounded-2xl'>-</button>
     </div>
  )
}

export default AddToCart