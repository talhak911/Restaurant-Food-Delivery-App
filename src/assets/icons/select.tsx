import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SelectIcon({select}: {select?: boolean}) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Circle cx={7.5} cy={7.5} r={7} stroke="#E95322" />
      <Circle cx={7.5} cy={7.5} r={4} 
fill={select?"#E95322":'none'}
      stroke="#E95322" />
    </Svg>
  );
}

export default SelectIcon;
