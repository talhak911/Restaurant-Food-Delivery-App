import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

function NotificationsIcon() {
  return (
    <View style={{marginHorizontal: 5}}>
      <Svg width={28} height={39} viewBox="0 0 28 39" fill="none">
        <Path
          d="M15.812 35.41a1.869 1.869 0 01-3.711 0M2.628 24.249a13.756 13.756 0 00.887-6.493c-.1-.904-.079-1.819.063-2.718a11.021 11.021 0 0121.738 0c.142.9.163 1.813.063 2.718-.226 2.204.078 4.43.887 6.492a5.449 5.449 0 01-4.387 7.537c-4.938.553-9.921.553-14.858 0a5.453 5.453 0 01-4.393-7.537zM16.41 3.957a1.958 1.958 0 11-3.915 0 1.958 1.958 0 013.915 0z"
          stroke="#E95322"
          strokeWidth={2.62415}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default NotificationsIcon;
