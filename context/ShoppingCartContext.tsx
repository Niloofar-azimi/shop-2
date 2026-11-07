
"use client";

import { createContext, useContext, useState } from "react";

type ShoppingCreatContextProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type TShoppingCreatContext = {
  cartItem: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  getProductQty:(id:number)=>number;
  cartTotalQty:number;
  handleDecreaseProductQty:(id:number)=>void;
  handleRemoveProduct:(id:number)=>void;
};

const ShoppingCreatContext = createContext(
  {} as TShoppingCreatContext
);

export const useShoppingCreatContext = () => {
  return useContext(ShoppingCreatContext);
};

export function ShoppingCreatContextProvider({
  children,
}: ShoppingCreatContextProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
      const getProductQty=(id:number)=>{
        return cartItem.find((item)=>item.id==id)?.qty || 0;
    }
    const cartTotalQty=cartItem.reduce((totalQty,item)=>{
      return totalQty+item.qty

    },0)

  const handleIncreaseProductQty = (id: number) => {
    setCartItem((currentItems) => {
      const isNotProductExist =
        currentItems.find((item) => item.id === id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleDecreaseProductQty=(id:number)=>{
    setCartItem(currentItems=>{
      let isLastOne=currentItems.find(item=>item.id==id)?.qty==1;
      if(isLastOne){
        return currentItems.filter(item=>item.id != id)
      }
      else{
          return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
        
        
      }
    })
  };
  const handleRemoveProduct=(id:number)=>{
    setCartItem(currentItems=>{
      return currentItems.filter(item=>item.id !=id)
    })
  }

  return (
    <ShoppingCreatContext.Provider
      value={{ getProductQty,cartItem, handleIncreaseProductQty,cartTotalQty ,handleDecreaseProductQty,handleRemoveProduct}}
    >
      {children}
    </ShoppingCreatContext.Provider>
  );
}
