import {SafeAreaView, ScrollView, TextInput, View} from 'react-native';
import {styles} from './HelpStyles';
import useHelp from './useHelp';
import {CustomButton} from '../../components/customButton/CustomButton';
import {COLORS} from '../../constants/color';
import {Font} from '../../utils/responsive';
import SearchFilterIcon from '../../assets/icons/searchFilter';
import Faqs from '../../components/faqs/Faqs';
import {FAQS_CATEGORY, HELP_BUTTONS} from '../../constants/constants';

const Help = () => {
  const {
    setIsActive,
    isActive,
    isActiveCategory,
    filteredFaqs,
    handleActiveCategory,
  } = useHelp();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.helpButtonsContainer}>
              {HELP_BUTTONS.map((item, index) => (
                <CustomButton
                  key={index}
                  onPress={() => {
                    setIsActive(item);
                  }}
                  title={item}
                  pV={3}
                  bgColor={isActive === item ? COLORS.orange : COLORS.orange2}
                  textColor={
                    isActive === item ? COLORS.almostWhite : COLORS.orange
                  }
                  fontSize={Font(17)}
                  width="48%"
                />
              ))}
            </View>
            <View style={styles.filterButtonsContainer}>
              {FAQS_CATEGORY.map((item, index) => (
                <CustomButton
                  key={index}
                  onPress={() => {
                    handleActiveCategory(item);
                  }}
                  title={item}
                  pV={3}
                  bgColor={
                    isActiveCategory === item ? COLORS.orange : COLORS.orange2
                  }
                  textColor={
                    isActiveCategory === item
                      ? COLORS.almostWhite
                      : COLORS.orange
                  }
                  fontSize={Font(17)}
                  width="32%"
                />
              ))}
            </View>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchInput}
                placeholderTextColor={COLORS.grey}
                placeholder="Search"
              />
              <View style={{transform: [{scale: 1.3}]}}>
                <SearchFilterIcon />
              </View>
            </View>

            {filteredFaqs.map((item, index) => (
              <Faqs key={index} question={item.question} answer={item.answer} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Help;
