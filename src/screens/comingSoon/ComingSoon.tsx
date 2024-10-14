import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import {COLORS} from '../../constants/color';

const ComingSoon = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontFamily: LEAGUE_SPARTAN_MEDIUM,
          color: COLORS.almostBlack,
          fontSize: 16,
        }}>
        Coming Soon
      </Text>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({});
