import { useState } from "react"

const useFoodDetail = () => {
const [items,setItems]=useState(1)

const addItems = ()=>{
        setItems(items+1)
}
const removeItems = ()=>{
    if(items-1>0){
        setItems(items-1)
    }
}
  return {
    items,
    addItems,
    removeItems
  }
}

export default useFoodDetail