import { useState } from "react";
import { useAppDispatch } from "../../hooks/useStore";
import { addCustomerAddress } from "../../redux/slices/authSlice";
import { useNavigation } from "@react-navigation/native";
import { TabNavigatorProps } from "../../types/types";
import Toast from 'react-native-toast-message';

const useAddAddress = () => {
const dispatch = useAppDispatch()
const navigation = useNavigation<TabNavigatorProps>()
    const [fields, setFields] = useState<{
        'Name': string;
        'Address': string;
      }>({
        'Name': '',
        'Address': '',
      });
    const [loading,setLoading]=useState(false)
      const onChange = (key: keyof typeof fields, value: string) => {
        setFields({
          ...fields,
          [key]: value
        });
      };

      const addAddress= async()=>{
        if(fields.Name.length<3 || fields.Address.length<3){
          Toast.show({
            type:"error",
            text1:"Name and Address should be valid"
          })
          return
        }
     setLoading(true)
       const res =await dispatch(addCustomerAddress({name:fields.Name,address:fields.Address}))
       if(res.meta.requestStatus==='fulfilled'){
        setFields({
          'Name': '',
          'Address': '',
        })
        navigation.navigate("Delivery Address")
       }
     setLoading(false)
    }


  return {
fields,
onChange,
addAddress,
loading
  }
}

export default useAddAddress