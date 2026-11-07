import Container from "@/component/Container";
import ProductItem from "@/component/ProductItem";
import Link from "next/link";
import { IProductItemProps } from "@/component/ProductItem";

export default async function Store() {
  
  const responce=await fetch("http://localhost:3001/product")
  const data= await responce.json() as IProductItemProps[]
   
  return (
    <Container>
      <h1 className="text-right py-4">خانه</h1>

      <div className="grid grid-cols-4 gap-4">
        {data.map(item=>
       <Link key={item.id} href={`/store/${item.id}`}>
        <ProductItem  {...item}/></Link>

        )}
        
         
      
       
    
      </div>
    </Container>
  );
}