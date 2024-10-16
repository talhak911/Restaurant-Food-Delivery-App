import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import WelcomeIcon from '../../assets/icons/welcome';
import {CustomButton} from '../../components/customButton/CustomButton';
import { Font, Height, Width } from '../../utils/responsive';
import { useWelcome } from './useWelcome';
const Welcome = () => {
  const {navigateToSignUp,navigateToSignIn}= useWelcome()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.orange}}>
      <ScrollView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: Height(31),
        }}>
       <View style={{maxWidth:300,maxHeight:400}}>
       <WelcomeIcon />
       </View>
        <Text
          style={{
            color: COLORS.almostWhite,
            fontSize: Font(14),
            marginTop: 30,
            marginHorizontal: Width(11),
            textAlign: 'center',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
        <View style={{marginTop: Height(5), gap: 4,marginBottom:12}}>
          <CustomButton
            pH={Width(17)}
            bgColor={COLORS.yellow}
            textColor={COLORS.orange}
            loading={false}
            title="Log In"
            onPress={navigateToSignIn}
            />
          <CustomButton
            pH={Width(17)}
            bgColor={COLORS.yellow2}
            textColor={COLORS.orange}
            loading={false}
            title="Sign Up"
            onPress={navigateToSignUp}
            />
        </View>
      </View>
            </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
