import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {styles} from './RecommendationsStyles';
import useRecommendations from './useRecommendations';
import RecommendationsFoodCard from '../../components/recommendationFoodCard/RecommendationFoodCard';

const Recommendations = () => {
  const {foods} = useRecommendations();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              Discover the dishes recommended by the chef.
            </Text>
            <View
              style={{
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row',
                columnGap: '3%',
                rowGap: 27,
                marginTop: 22,
              }}>
              {foods?.map((item, index) => (
                <RecommendationsFoodCard key={index} food={item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Recommendations;
