import { useState } from "react"

const useLeaveReview = () => {
    const [rating,setRating]=useState(0)
    const ratings =[1,2,3,4,5]
  return {
ratings,
rating,
setRating
  }
}

export default useLeaveReview