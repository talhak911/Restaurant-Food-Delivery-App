import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabNavigatorProps } from '../../types/types';


const useCartContext = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const navigation = useNavigation<TabNavigatorProps>();

  const openCart = () => {
    setCartVisible(true);  
  };

  const closeCart = () => {
    setCartVisible(false); 
  };

  const navigateToConfirmOrder = () => {
    closeCart(); 
    navigation.navigate('Confirm Order');
  };

  return {
    cartVisible,
    openCart, 
    closeCart, 
    navigateToConfirmOrder,
  };
};

export default useCartContext;
