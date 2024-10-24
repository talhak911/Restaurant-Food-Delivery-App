import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OnBoardingSliderItem from '../../components/onBoardingSliderItem/OnBoardingSliderItem';
import useOnBoarding from './useOnBoardingScreen';
import {styles} from './OnBoardingStyles';
import {CustomButton} from '../../components/customButton/CustomButton';
import {ON_BOARDING_ITEMS} from '../../constants/constants';
import DownArrowIcon from '../../assets/icons/downArrow';

const OnBoarding = () => {
  const {onScroll, currentIndex, flatListRef, onNext, getStarted} =
    useOnBoarding();

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {ON_BOARDING_ITEMS?.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.activeDot : styles.inActiveDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={getStarted} style={styles.skipButtonContainer}>
        <Text style={styles.skipButtonText}>Skip</Text>
        <View style={{transform: [{rotate: '-90deg'}]}}>
          <DownArrowIcon />
        </View>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={ON_BOARDING_ITEMS}
        renderItem={({item, index}) => (
          <OnBoardingSliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      {renderPagination()}
      <View style={styles.actionButtonContainer}>
        {currentIndex < ON_BOARDING_ITEMS?.length - 1 ? (
          <CustomButton onPress={onNext} title="Next" pH={40} fontSize={17} />
        ) : (
          <CustomButton
            onPress={getStarted}
            title="Get Started"
            pH={16}
            fontSize={17}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
