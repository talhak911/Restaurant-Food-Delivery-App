import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './headerTitleStyles';

const HeaderTitle = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
