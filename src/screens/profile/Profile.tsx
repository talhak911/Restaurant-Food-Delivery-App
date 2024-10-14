import {View, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {CustomInput} from '../../components/customInput/CustomInput';
import useProfile from './useProfile';
import CameraIcon from '../../assets/icons/camera';import { CustomButton } from '../../components/customButton/CustomButtom';
import DateInput from '../../components/dateInput/DateInput';

const Profile = () => {
  const {fields,onChange,handleDateChange}=useProfile()
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
          <View style={{position:"relative"}}>
            <Image
              style={{height: 127, width: 127, borderRadius: 20}}
              source={{
                uri: 'https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain',
              }}
            />
            <TouchableOpacity style={{position:'absolute',bottom:-5,right:-5}}>
              <CameraIcon/>
            </TouchableOpacity>
          </View>
          <View style={{gap: 32,marginTop:38}}>
    
        {Object.keys(fields).map((item,index)=>
            <CustomInput
            key={index}
            label={item}  
            value={fields[item as keyof typeof fields]}
            onChange={(text) => onChange(item as keyof typeof fields, text)} 
            placeHolder={item} 
          />
        )}          
<DateInput date={fields['Date of Birth']}
setDate={handleDateChange}
/>
          </View>
        </View>
      </ScrollView>
      <View style={{backgroundColor:"white",alignItems:"center",paddingBottom:25}}>
        <CustomButton
        title='Update Profile'
        fontSize={17}
        pH={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
