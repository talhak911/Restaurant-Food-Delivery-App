import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import useChangePassword from './useChangePassword';
import {CustomInput} from '../../components/customInput/CustomInput';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import {CustomButton} from '../../components/customButton/CustomButtom';

const ChangePassword = () => {
  const {fields, onChange,loading,handleChangePassword} = useChangePassword();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{

            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 35,
            paddingVertical: 19,
            alignItems: 'center',
          }}>
          <View style={{gap: 26, marginTop: 38}}>
            {Object.keys(fields).map((item, index) => (
              <View key={index}>
                <CustomInput
                  label={item}
                  value={fields[item as keyof typeof fields]}
                  onChange={text => onChange(item as keyof typeof fields, text)}
                  placeHolder={item}
                  secureInput
                />
                {index === 0 && (
                  <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                    <Text
                      style={{
                        marginTop: 12,
                        fontFamily: LEAGUE_SPARTAN_MEDIUM,
                        fontSize: 15,
                        color: COLORS.orange,
                      }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>

        </View>
          <View style={{alignItems:"center",backgroundColor:"white",paddingBottom:58}}>
            <CustomButton title="Change Password" 
            fontSize={17}
            pH={36}
            onPress={handleChangePassword}
            loading={loading}
            />
          </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default ChangePassword;
