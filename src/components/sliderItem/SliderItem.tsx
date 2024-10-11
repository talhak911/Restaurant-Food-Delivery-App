import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import useSliderItem from './useSliderItem';
import {FetchFoodsQuery} from '../../gql/graphql';
import {IMAGES} from '../../constants/constants';

const SliderItem = ({
  item: {id, name, description, price, picture},
  index,
}: {
  item: FetchFoodsQuery['fetchFoods'][number];
  index: number;
}) => {
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

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '81%',
    height: 128,
    borderRadius: 20,
    objectFit: 'cover',
  },
});
