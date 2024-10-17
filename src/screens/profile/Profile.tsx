import {View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomInput} from '../../components/customInput/CustomInput';
import useProfile from './useProfile';
import CameraIcon from '../../assets/icons/camera';
import {CustomButton} from '../../components/customButton/CustomButton';
import DateInput from '../../components/dateInput/DateInput';
import {LoadingImage} from '../../components/loadingImage/LoadingImage';
import {styles} from './ProfileStyles';

const Profile = () => {
  const {
    fields,
    handleDateChange,
    handleUpdateProfile,
    loading,
    handleImagePicker,
    picture,
    profilePic,
    fieldConfig,
  } = useProfile();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <View style={{position: 'relative'}}>
            <LoadingImage
              placeholder="profile"
              uri={picture || profilePic}
              style={styles.profilePicture}
            />
            <TouchableOpacity
              onPress={handleImagePicker}
              style={styles.cameraIcon}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.inputFieldsContainer}>
            {fieldConfig.map((field, index) => {
              return index === 1 ? (
                <DateInput
                  key={index}
                  date={fields['Date of Birth']}
                  setDate={handleDateChange}
                />
              ) : (
                <CustomInput
                  label={field.label}
                  key={index}
                  value={field.value}
                  onChange={field.onChange}
                  placeHolder={field.placeholder}
                  secureInput={field.secureInput}
                  editable={field.editable}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          loading={loading}
          onPress={handleUpdateProfile}
          title="Update Profile"
          fontSize={17}
          pH={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
