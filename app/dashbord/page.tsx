"use client"
import Container from "@/component/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";

function Dashboard() {
    const[newProduct,setNewProduct]=useState({
        id: "",
      image: "",
      title: "",
      description:"",
      price: ""
    });
    const handelChangeProduct=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const{value,name}=e.target
        setNewProduct({
            ...newProduct,
            [name]:value
        })
    };
    const handelClickProduct=()=>{
       axios(
        {
       method:"post",
       url:"http://localhost:3001/product",
       data: {
       id: Math.floor(Math.random()*1000).toString(),
       image: newProduct.image,
       title: newProduct.title,
       description:newProduct.description,
       price: newProduct.price

        }
        }
    
       )
    }
  return (
    <div className="mt-30">
      <Container>
        <div className="flex flex-col items-center gap-4  ">
          <input
          onChange={handelChangeProduct}
            name="title"
            type="text"
            placeholder="عنوان"
            className="w-full max-w-md p-3 border rounded-lg"
          />

          <input
           onChange={handelChangeProduct}
          name="image"
            type="text"
            placeholder="عکس"
            className="w-full max-w-md p-3 border rounded-lg"
          />

          <input
           onChange={handelChangeProduct}
           name=" price"
            type="text"
            placeholder="قیمت"
            className="w-full max-w-md p-3 border rounded-lg"
          />

          <textarea
           onChange={handelChangeProduct}
              name="description "
            placeholder="توضیحات"
            className="w-full max-w-md h-40 p-3 border rounded-lg resize-none"
          />
          <button onClick={handelClickProduct}  className="h-12 px-6 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition">ساخت محصول جدید</button>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;