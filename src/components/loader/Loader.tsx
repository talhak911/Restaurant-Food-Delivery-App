import {ActivityIndicator, StyleSheet, View} from 'react-native';
const Loader = ({color}: {color?: string}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={color || 'white'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
