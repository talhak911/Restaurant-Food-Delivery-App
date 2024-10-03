import {View, Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import NotificationIcon from '../../assets/icons/notification';
import NotificationsIcon from '../../assets/icons/notifications';
import DownArrowIcon from '../../assets/icons/downArrow';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import {SETTINGS} from '../../constants/constants';
import useSettings from './useSettings';
import { TabPaths } from '../../types/types';

const Settings = () => {
    const {navigateTo}=useSettings()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingLeft: 39,
            paddingRight: 46,
            paddingVertical: 56,
          }}>
          <View style={{gap: 22}}>
            {SETTINGS.map((item, index) => (
              <TouchableOpacity
              onPress={()=>{navigateTo(item.screen as keyof TabPaths)}}
                key={index}
                style={{flexDirection: 'row', gap: 18, alignItems: 'center'}}>
                <View>{item.icon}</View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: LEAGUE_SPARTAN_MEDIUM,
                      fontSize: 20,
                      color: COLORS.almostBlack,
                    }}>
                    {item.title}
                  </Text>
                  <DownArrowIcon />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
