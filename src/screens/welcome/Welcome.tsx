import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import WelcomeIcon from '../../assets/icons/welcome';
import {CustomButton} from '../../components/customButton/CustomButton';
import {Width} from '../../utils/responsive';
import {useWelcome} from './useWelcome';
import {styles} from './WelcomeStyles';
const Welcome = () => {
  const {navigateToSignUp, navigateToSignIn} = useWelcome();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.contentContainer}>
          <View style={styles.logo}>
            <WelcomeIcon />
          </View>
          <Text style={styles.description}>
            Enjoy the convenience of food delivery without compromising on
            taste.
          </Text>
          <View style={styles.buttonContainer}>
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
