import { useState } from "react"
import { useAppDispatch } from "../../hooks/useStore"
import { updateCart } from "../../redux/slices/cartSlice"
import { UpdateCartParams } from "../../types/types"
import { ToastAndroid } from "react-native"
import useCart from "../../hooks/useCart"

const useFoodDetail = () => {
const [quantity,setQuantity]=useState(1)
const dispatch = useAppDispatch()
const {openCart}= useCart()
const addItems = ()=>{
        setQuantity(quantity+1)
}
const removeItems = ()=>{
    if(quantity-1>0){
        setQuantity(quantity-1)
    }
}
const addToCart=async({quantity,foodId}:UpdateCartParams)=>{
    console.log("add te o tcar")

    const res = await dispatch(updateCart({quantity,foodId}))
    if(res.meta.requestStatus==='fulfilled'){
        ToastAndroid.show("Item added",2)
        openCart()
    }

}
  return {
    quantity,
    addItems,
    addToCart,
    removeItems
  }
}

export default useFoodDetail