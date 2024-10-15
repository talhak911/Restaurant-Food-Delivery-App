import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {CustomInput} from '../../components/customInput/CustomInput';
import useProfile from './useProfile';
import CameraIcon from '../../assets/icons/camera';
import {CustomButton} from '../../components/customButton/CustomButtom';
import DateInput from '../../components/dateInput/DateInput';
import {BlinkingImage} from '../../components/loading/Loading';
import {IMAGES} from '../../constants/constants';

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
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 35,
            paddingVertical: 19,
            alignItems: 'center',
          }}>
          <View style={{position: 'relative'}}>
            <BlinkingImage
              placeholder="profile"
              uri={picture || profilePic}
              style={{height: 127, width: 127, borderRadius: 20}}
            />

            <TouchableOpacity
              onPress={handleImagePicker}
              style={{position: 'absolute', bottom: -5, right: -5}}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
          <View style={{gap: 32, marginTop: 38}}>
            {fieldConfig.map((field, index) => {
              return index === 1 ? (
                <DateInput
                  key={index}
                  date={fields['Date of Birth']}
                  setDate={handleDateChange}
                />
              ) : (
                <CustomInput
                  label={field.placeholder}
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
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          paddingBottom: 25,
        }}>
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
