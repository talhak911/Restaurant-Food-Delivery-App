import {View, Text, TouchableOpacity} from 'react-native';
import {useFaqs} from './useFaqs';
import {styles} from './FaqsStyles';
import {COLORS} from '../../constants/color';
import BackIcon from '../../assets/icons/back';

const Faqs = ({question, answer}: {question: string; answer: string}) => {
  const {handlePress, handleItemPress, isOpen} = useFaqs();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text
          style={[
            styles.question,
            isOpen ? {color: 'black'} : {color: COLORS.orange},
          ]}>
          {question}
        </Text>
        <View
          style={
            isOpen
              ? {transform: [{rotate: '90deg'}]}
              : {transform: [{rotate: '-90deg'}]}
          }>
          <BackIcon />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={{flex: 1}}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

export default Faqs;
