import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useLeaveReview from './useLeaveReview';
import {styles} from './LeaveReviewStyles';
import {LeaveReviewProps} from '../../types/types';
import {LoadingImage} from '../../components/loadingImage/LoadingImage';
import {COLORS} from '../../constants/color';
import {LEAGUE_SPARTAN_BOLD} from '../../constants/fonts';
import RatingStar from '../../assets/icons/ratingStar';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButton';
import {Font} from '../../utils/responsive';

const LeaveReview = ({route: {params}}: LeaveReviewProps) => {
  const {
    ratings,
    rating,
    onNext,
    picUrl,
    name,
    onSubmit,
    index,
    loading,
    handleRatingChange,
  } = useLeaveReview(params);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <LoadingImage
              placeholder="food"
              uri={picUrl}
              style={{height: 157, width: 157, borderRadius: 30}}
            />
            <Text
              style={{
                marginTop: 12,
                color: COLORS.almostBlack,
                fontFamily: LEAGUE_SPARTAN_BOLD,
                fontSize: 24,
              }}>
              {name}
            </Text>
            <Text style={styles.leaveReviewText}>
              We'd love to know what you think of your dish.
            </Text>
            <View
              style={{
                marginVertical: 25,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 11,
              }}>
              {ratings.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleRatingChange(index + 1);
                  }}>
                  <RatingStar fill={rating > index} />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.leaveReviewText}>Leave us your comment!</Text>
            <View style={{marginTop: 8, width: '100%'}}>
              <CustomInput
                onChange={() => {}}
                placeHolder="Write Review..."
                value=""
                height={95}
              />
            </View>
            <View style={styles.filterButtonsContainer}>
              {params?.reviews?.length !== index + 1 ? (
                <CustomButton
                  onPress={onNext}
                  title={'Next'}
                  pV={3}
                  bgColor={COLORS.orange2}
                  textColor={COLORS.orange}
                  fontSize={Font(17)}
                  width="48%"
                />
              ) : (
                <>
                  <CustomButton
                    onPress={() => {}}
                    title={'Cancel'}
                    pV={3}
                    bgColor={COLORS.orange2}
                    textColor={COLORS.orange}
                    fontSize={Font(17)}
                    width="48%"
                  />
                  <CustomButton
                    onPress={onSubmit}
                    title={'Submit'}
                    loading={loading}
                    pV={3}
                    bgColor={COLORS.orange}
                    textColor={COLORS.almostWhite}
                    fontSize={Font(17)}
                    width="48%"
                  />
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LeaveReview;
