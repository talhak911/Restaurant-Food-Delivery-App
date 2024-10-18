import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {CustomButton} from '../../components/customButton/CustomButton';
import useRestaurantHome from './useRestaurantHome';
import {styles} from './RestaurantHomeStyles';

const RestaurantHome = () => {
  const {signOut} = useRestaurantHome();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={{color: 'black', fontSize: 16}}>
            Visit the website for restaurant managment
          </Text>
          <CustomButton onPress={signOut} title="SignOut" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantHome;
