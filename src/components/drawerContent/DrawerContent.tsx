import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import LogoutIcon from '../../assets/icons/logout';
import {DRAWER_LIST} from '../../constants/constants';
import useDrawerContent from './useDrawerContent';
import {LoadingImage} from '../loadingImage/LoadingImage';
import {styles} from './DrawerContentStyles';

function DrawerContent(props: DrawerContentComponentProps) {
  const {user, NavigateTo, signOut} = useDrawerContent();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} style={{}}>
        <View style={styles.profileContainer}>
          <LoadingImage
            style={styles.profilePicture}
            uri={user?.customer?.picture}
            placeholder="profile"
          />
          <View>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
        <View style={{marginTop: 35}}>
          {DRAWER_LIST.map((item, index) => (
            <DrawerItem
              key={index}
              style={styles.drawerItem}
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
