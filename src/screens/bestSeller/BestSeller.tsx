import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './BestSellerStyles';
import useBestSeller from './useBestSeller';
import BestSellerFoodCard from '../../components/bestSellerFoodCard/BestSellerFoodCard';

const BestSeller = () => {
  const {foods} = useBestSeller();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Discover our most popular dishes!</Text>
            <View style={{justifyContent:"center",flexWrap:"wrap",flexDirection:"row",columnGap:'3%',rowGap:27,marginTop:22}}>
              {foods?.map((item,index)=>
            <BestSellerFoodCard key={index} food={item} />
            )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default BestSeller;
