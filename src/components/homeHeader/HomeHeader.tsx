import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import CartIcon from '../../assets/icons/cart';
import NotificationIcon from '../../assets/icons/notification';
import SearchFilterIcon from '../../assets/icons/searchFilter';
import UserIcon from '../../assets/icons/user';
import {COLORS} from '../../constants/color';
import useCart from '../../hooks/useCart';
import {styles} from './HomeHeaderStyles';
import useHomeHeader from './useHomeHeader';

const HomeHeader = ({
  greetingShown,
  onSearch,
  setSearchQuery,
  searchQuery,
  editable
}: {
  greetingShown?: boolean;
  onSearch?: () => void;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  editable?:boolean
}) => {
  const {openCart} = useCart();
  const {navigateToProfile} = useHomeHeader();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.searchBarContainer} pointerEvents="box-none">
          <TextInput
            editable={editable}
            style={styles.searchInput}
            placeholderTextColor={COLORS.grey}
            placeholder="Search"
            onChangeText={setSearchQuery}
            returnKeyType="search"
            value={searchQuery}
            onSubmitEditing={onSearch}
          />
          <SearchFilterIcon />
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={openCart}>
            <CartIcon />
          </TouchableOpacity>
          <NotificationIcon />
          <TouchableOpacity onPress={navigateToProfile}>
            <UserIcon />
          </TouchableOpacity>
        </View>
      </View>

      {greetingShown && (
        <View>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.text}>Rise and Shine! It's Breakfast Time</Text>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;
