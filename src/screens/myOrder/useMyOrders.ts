import { useState } from 'react'

export type OrderStatus ='Active' | 'Completed'| 'Cancelled'
export   const ORDER_FILTERS:{status:OrderStatus}[] = [{status:'Active'},{status:'Completed'},{status:'Cancelled'}]
   
export const useMyOrders = () => {
    const [isActive, setIsActive] = useState<OrderStatus>('Active');

    const handleIsActive = (button: OrderStatus) => {
      setIsActive(button);
    };
   return {
        isActive,
        handleIsActive
    }
}