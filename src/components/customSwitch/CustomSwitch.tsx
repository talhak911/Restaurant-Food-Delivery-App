import { StyleSheet, Switch } from 'react-native'
import { COLORS } from '../../constants/color'

const CustomSwitch = ({isEnabled,action}:{isEnabled:boolean,action:(e:boolean)=>void}) => {
  return (
    <Switch
    trackColor={{false: COLORS.orange2, true: COLORS.orange}}
    thumbColor={'white'}
    ios_backgroundColor={COLORS.almostWhite}
    onValueChange={action}
    value={isEnabled}
  />
  )
}

export default CustomSwitch

const styles = StyleSheet.create({})