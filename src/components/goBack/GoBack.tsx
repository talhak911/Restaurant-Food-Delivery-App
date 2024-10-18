import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back';
import useGoBack from './useGoBack';

const GoBack = () => {
  const {navigateToBack} = useGoBack();
  return (
    <TouchableOpacity style={{paddingLeft: 33}} onPress={navigateToBack}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default GoBack;
