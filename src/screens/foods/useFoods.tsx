import { ToastAndroid } from 'react-native'
import { useEffect, useState } from 'react'
import {  FilterBy } from '../../constants/constants'
import { FetchFoodsDocument, FoodCategory } from '../../gql/graphql';
import { useNavigation } from '@react-navigation/native';
import { TabNavigatorProps } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchFoods } from '../../redux/slices/foodSlice';

const useFoods = () => {
  const [activeButton,setActionButton]=useState<FilterBy|null>(null)
    // const {data,loading, error} = useQuery(FetchFoodsDocument);
    // const foods = data?.fetchFoods
    const dispatch = useAppDispatch()
    const foods = useAppSelector(state=>state.foods.foods)
    useEffect(()=>{
      dispatch(fetchFoods(activeButton?.toUpperCase() as FoodCategory))
    },[activeButton])
    const handlePressFoodCategory =(category:FilterBy)=>{
      if(category ===activeButton){
        setActionButton(null);
    }else{
      setActionButton(category)
    }
  
  }
    const navigation = useNavigation<TabNavigatorProps>()

    return{
        activeButton,
        handlePressFoodCategory,
        foods,
        navigation,
  }
}

export default useFoods