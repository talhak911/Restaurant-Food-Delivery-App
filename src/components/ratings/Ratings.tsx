import {Text, View} from 'react-native';
import StarIcon from '../../assets/icons/start';
import {styles} from './RatingsStyles';

const Ratings = ({ratings}: {ratings: string}) => {
  return (
    <View style={styles.ratingsContainer}>
      <Text style={styles.ratingText}>{ratings}</Text>
      <StarIcon />
    </View>
  );
};

export default Ratings;
