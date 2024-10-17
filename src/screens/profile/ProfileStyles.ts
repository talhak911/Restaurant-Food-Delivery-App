import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  contentContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 19,
    alignItems: 'center',
  },
  profilePicture: {height: 127, width: 127, borderRadius: 20},
  cameraIcon: {position: 'absolute', bottom: -5, right: -5},
  inputFieldsContainer: {gap: 32, marginTop: 38},
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 25,
  },
});
