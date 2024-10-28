import { useState } from "react"
import { cancelOrder } from "../redux/slices/orderSlice"
import { useAppDispatch } from "./useStore"

const useOrder = ({orderId}:{orderId:number}) => {
    const [loading,setLoading]=useState(false)
    const dispatch = useAppDispatch()
    const handleCancelOrder = async()=>{
        setLoading(true)
       await dispatch(cancelOrder({orderId}))
        setLoading(false)
    }
  return {
handleCancelOrder,
loading
  }
}

export default useOrder