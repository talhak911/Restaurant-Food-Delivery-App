import {Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import useSliderItem from './useSliderItem';
import {IMAGES} from '../../constants/constants';
import {styles} from './SliderItemStyles';
import {SliderItemProps} from '../../types/types';

const SliderItem = ({item, index}: SliderItemProps) => {
  const {navigateToFoodDetail} = useSliderItem();
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity
      key={index}
      onPress={() => {
        navigateToFoodDetail(item);
      }}
      style={[styles.itemContainer, {width}]}>
      <Image
        style={styles.image}
        source={
          item.picture ? {uri: item.picture} : IMAGES.foodPlaceholder.toString()
        }
      />
    </TouchableOpacity>
  );
};

export default SliderItem;
