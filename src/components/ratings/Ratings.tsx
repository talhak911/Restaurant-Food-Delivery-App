import {Text, View} from 'react-native';
import StarIcon from '../../assets/icons/start';
import {styles} from './RatingsStyles';

const Ratings = ({averageRating,totalRatingsCount}: {averageRating: number,totalRatingsCount:number}) => {
  return (
    <View style={styles.ratingsContainer}>
      <Text style={styles.ratingText}>{totalRatingsCount>0?averageRating:"NA"}</Text>
      <StarIcon />
    </View>
  );
};

export default Ratings;
