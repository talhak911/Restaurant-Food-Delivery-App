import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = () => {
  return (
    <Svg width={8} height={13} viewBox="0 0 8 13" fill="none">
      <Path
        d="M5.78 2L3.06 4.136c-.33.26-.597.593-.78.975a2.836 2.836 0 000 2.456c.183.382.45.715.78.974l2.72 2.133"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackIcon;
