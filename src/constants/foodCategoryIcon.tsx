import DessertWhiteBgIcon from '../assets/icons/dessertWhiteBg';
import DrinksWhiteBgIcon from '../assets/icons/drinksWhiteBg';
import MealIcon from '../assets/icons/meal';
import MealWhiteBgIcon from '../assets/icons/mealWhiteBg';
import SnacksWhiteBgIcon from '../assets/icons/snacksWhiteBg';
import VeganWhiteBgIcon from '../assets/icons/veganWhiteBg';
import {FoodCategory} from '../gql/graphql';

export const FOOD_CATEGORY_ICON = (category: FoodCategory) => {
  switch (category) {
    case FoodCategory.Drinks:
      return <DrinksWhiteBgIcon />;
    case FoodCategory.Vegan:
      return <VeganWhiteBgIcon />;
    case FoodCategory.Snacks:
      return <SnacksWhiteBgIcon />;
    case FoodCategory.Meal:
      return <MealWhiteBgIcon />;
    case FoodCategory.Dessert:
      return <DessertWhiteBgIcon />;
    default:
      return <MealIcon />;
  }
};
