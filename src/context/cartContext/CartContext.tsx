import React, { createContext, ReactNode } from 'react';
import { CustomModal } from '../../components/customModal/CustomModal';
import Cart from '../../components/cart/Cart';
import useCartContext from './useCartContext';
import { CartContextProps } from '../../types/types';



export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { cartVisible, openCart, closeCart, navigateToConfirmOrder } = useCartContext();

  return (
    <CartContext.Provider value={{ cartVisible, openCart, closeCart }}>
      {children}
      <CustomModal
        element={<Cart action={navigateToConfirmOrder} />}
        visible={cartVisible}
        onClose={closeCart}
      />
    </CartContext.Provider>
  );
};


