import {Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import useSliderItem from './useSliderItem';
import {IMAGES} from '../../constants/constants';
import {styles} from './SliderItemStyles';
import {SliderItemProps} from '../../types/types';

const SliderItem = ({
  item: {id, name, description, price, picture},
  index,
}: SliderItemProps) => {
  const {navigateToFoodDetail} = useSliderItem();
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity
      key={index}
      onPress={() => {
        navigateToFoodDetail({
          id,
          description,
          name,
          picUrl: picture,
          price: price.toString(),
        });
      }}
      style={[styles.itemContainer, {width}]}>
      <Image
        style={styles.image}
        source={picture ? {uri: picture} : IMAGES.foodPlaceholder.toString()}
      />
    </TouchableOpacity>
  );
};

export default SliderItem;
