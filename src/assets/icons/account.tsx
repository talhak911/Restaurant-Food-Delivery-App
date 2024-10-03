import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

function AccountIcon() {
  return (
    <View style={{marginHorizontal: 6}}>
      <Svg width={27} height={39} viewBox="0 0 27 39" fill="none">
        <Path
          d="M13.922 13.809a5.904 5.904 0 100-11.81 5.904 5.904 0 000 11.81zM24.791 31.055c-2.834 6.366-10.906 5.84-10.906 5.84s-8.077.505-10.906-5.84a9.483 9.483 0 010-7.763c2.83-6.366 10.906-5.841 10.906-5.841s8.072-.504 10.906 5.841a9.483 9.483 0 010 7.762z"
          stroke="#E95322"
          strokeWidth={2.62415}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default AccountIcon;
