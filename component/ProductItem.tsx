import React from 'react'

export interface IProductItemProps{
    id:string,
    image:string ,
    title:string,
    description:string,
    price:number

}
export interface IProductList{
  first: number|null,
  items:number|null,
  last: number|null,
  next: number|null,
  pages: number,
  prev: number|null,
  data:IProductItemProps[]
}

function ProductItem({image,title,price}:IProductItemProps) {
  return (
      <article className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
            </div>
            <div className="p-4 text-right rtl">
                <h3 className="line-clamp-1 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                    قیمت: <span className="font-bold text-sky-600">{price}$</span>
                </p>
            </div>
      </article>
  )
}

export default ProductItem
