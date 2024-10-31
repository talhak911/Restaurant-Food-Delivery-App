import {SafeAreaView, Text, View} from 'react-native';
import {useOAuthSignUp} from './useOAuthSignUp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButton';
import CustomDropdown from '../../components/customDropDown/CustomDropDown';
import {Role} from '../../gql/graphql';
import DateInput from '../../components/dateInput/DateInput';
import {styles} from './OAuthSignUpStyles';
import {OAuthSignUpProps} from '../../types/types';
import Loader from '../../components/loader/Loader';

const OAuthSignUp = ({route: {params}}: OAuthSignUpProps) => {
  const {
    handleSignUp,
    fields,
    role,
    loading,
    dob,
    selectRole,
    handleDateChange,
  } = useOAuthSignUp(params);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="always"
          style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Finish Setting Up your Account!</Text>
            <View style={styles.gap}>
              {fields.map((field, index) => (
                <CustomInput
                  key={index}
                  value={field.value}
                  onChange={field.onChange}
                  placeHolder={field.placeholder}
                  secureInput={field.secureInput}
                  label={field.label}
                  keyboardType={field.keyboardType}
                />
              ))}

              <DateInput date={dob} setDate={handleDateChange} />
              <CustomDropdown
                placeHolder="Select User Role"
                label="Role"
                items={[Role.Customer, Role.Restaurant]}
                onSelect={selectRole}
                selectedValue={role}
              />
            </View>
            {loading ? (
              <Loader color="black" />
            ) : (
              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Continue"
                  pH={30}
                  loading={loading}
                  onPress={handleSignUp}
                />
              </View>
            )}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OAuthSignUp;
