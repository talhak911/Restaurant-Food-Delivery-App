import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './OnBoardingSliderItemStyles';

const OnBoardingSliderItem = ({item}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image.toString()} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={styles.scrollView}>
        {item.icon}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>
    </View>
  );
};

export default OnBoardingSliderItem;
