"use client"

import { useShoppingCreatContext } from "@/context/ShoppingCartContext"
interface IAddToCartProps{
  id:string;
}

function AddToCart({id}:IAddToCartProps) {
    const{getProductQty,cartItem,handleIncreaseProductQty,handleDecreaseProductQty,handleRemoveProduct}=useShoppingCreatContext();
    console.log("AddToCart rendered");
console.log(cartItem);
  return (
<div>
         <div>
                   <button  onClick={()=>handleIncreaseProductQty(parseInt(id))}  className='px-4 py-2 bg-gray-700 text-white rounded-2xl'>+</button>
                <span className='mx-4'>{getProductQty(parseInt(id))}</span>
                        <button onClick={()=>handleDecreaseProductQty(parseInt(id))} className='px-4 py-2 bg-gray-700 text-white rounded-2xl'>-</button>
     </div>
     <div>
      <button onClick={()=>handleRemoveProduct(parseInt(id))} className="px-7 py-2 mt-3 bg-gray-700 text-white rounded-2xl  ">
        حذف
      </button>
     </div>
</div>
  )
}

export default AddToCart