import { useAppSelector } from "../../hooks/useStore"

const useBestSeller = () => {
  
  const foods = useAppSelector(state=>state.foods.foods)

  return {
    foods
  }
}

export default useBestSeller