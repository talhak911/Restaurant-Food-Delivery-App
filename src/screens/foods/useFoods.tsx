
import { useEffect, useState } from 'react'
import {  FilterBy } from '../../constants/constants'
import {  FoodCategory } from '../../gql/graphql';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorProps } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchFoods } from '../../redux/slices/foodSlice';

const useFoods = () => {
  const [activeButton,setActionButton]=useState<FilterBy|null>(null)
    const dispatch = useAppDispatch()
    const foods = useAppSelector(state=>state.foods.filteredFoods)
    useEffect(()=>{
      dispatch(fetchFoods({category:activeButton?.toUpperCase() as FoodCategory}))
    },[activeButton])
    const handlePressFoodCategory =(category:FilterBy)=>{
      if(category ===activeButton){
        setActionButton(null);
    }else{
      setActionButton(category)
    }
  
  }
    const navigation = useNavigation<StackNavigatorProps>()

    return{
        activeButton,
        handlePressFoodCategory,
        foods,
        navigation,
  }
}

export default useFoods