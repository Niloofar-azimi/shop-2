
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

  const handleIncreaseProductQty = (id: number) => {
    setCartItem((currentItem) => {
      const isNotProductExist =
        currentItem.find((item) => item.id === id) == null;

      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
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

  return (
    <ShoppingCreatContext.Provider
      value={{ cartItem, handleIncreaseProductQty }}
    >
      {children}
    </ShoppingCreatContext.Provider>
  );
}
