import Container from '@/component/Container'
import React from 'react'
import { IProductItemProps } from '@/component/ProductItem'
import { promises } from 'readline'
import AddToCart from '@/component/addToCart'
interface IProductProps{
    params:Promise<{id:string}>,
    searchParams:Promise<{}>


}

async function Product({params}:IProductProps) {

    const {id}=await params;
      const responce=await fetch(`http://localhost:3001/product/${id}`);
      const data= await responce.json() as IProductItemProps;
      console.log("PRODUCT PAGE RENDERED");
  return (
    <Container >
        <div className=' grid grid-cols-10 mt-8    shadow-md items-center m-8 rounded-2xl '>
           
            <div className=' col-span-7 rtl text-right p-4 '>
    
                <h1 className='font-bold text-xl m-6'>{data.title}</h1>
                <p>
                    {data.description}

                </p>
                <p className='m-6 font-bold'>قیمت:{data.price}</p>
                <AddToCart id={id}/>
  
            </div>
           <div className='col-span-3 w-full  '>
  <img
    src={data.image}
    alt="تیشرت مرد عنکبوتی"
    className="w-full h-100 object-contain p-4 rounded-2xl"
  />
</div>
        </div>
    </Container>
  )
}

export default Product