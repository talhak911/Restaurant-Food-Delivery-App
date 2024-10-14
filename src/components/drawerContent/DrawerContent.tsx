import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LogoutIcon from '../../assets/icons/logout';
import {COLORS} from '../../constants/color';
import {Width} from '../../utils/responsive';
import {DrawerList} from '../../constants/constants';
import {FONT_LEAGUE_SPARTAN} from '../../constants/fonts';
import useDrawerContent from './useDrawerContent';
import {BlinkingImage} from '../loading/Loading';

function DrawerContent(props: any) {
  const {user, NavigateTo, signOut} = useDrawerContent();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.orange,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        paddingLeft: 20,
        paddingRight: 41,
        paddingBottom: 91,
        paddingTop: 65,
      }}>
      <DrawerContentScrollView {...props} style={{}}>
        <View
          style={{
            paddingLeft: 13,
            flexDirection: 'row',
            gap: 23,
            alignItems: 'center',
          }}>
          <BlinkingImage
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
            uri={user?.customer?.picture}
            placeholder="profile"
          />
          {user?.customer?.picture}
          <View>
            <Text
              style={{
                fontFamily: FONT_LEAGUE_SPARTAN,
                fontWeight: 'bold',
                fontSize: 33,
                lineHeight: 33,
                color: COLORS.almostWhite,
              }}>
              {user?.name}
            </Text>
            <Text
              style={{
                fontFamily: FONT_LEAGUE_SPARTAN,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 16,
                color: COLORS.yellow2,
              }}>
              {user?.email}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 35}}>
          {DrawerList.map((item, index) => (
            <DrawerItem
              key={index}
              style={{
                width: Width(100),
                borderBottomColor: COLORS.yellow2,
                borderBottomWidth: 1,
                paddingVertical: 2,
              }}
              labelStyle={styles.labelStyle}
              onPress={() => {
                NavigateTo(item.navigateTo);
              }}
              icon={() => <Text>{item.icon}</Text>}
              label={item.label}
            />
          ))}
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={signOut}
          icon={() => <LogoutIcon />}
          label="Sign Out"
          labelStyle={styles.labelStyle}
        />
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    marginLeft: 9,
  },
  labelStyle: {
    width: '100%', // Ensure label takes up full width
    color: COLORS.yellow2,
    fontSize: 24,
  },
});
