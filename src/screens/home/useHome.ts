import { useAppSelector } from "../../hooks/useStore"

const useHome = () => {
    const data= useAppSelector(state=>state.auth.user)
  return {
data
  }
}

export default useHome