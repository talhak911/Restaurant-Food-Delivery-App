import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/color'
import { LEAGUE_SPARTAN_REGULAR } from '../../constants/fonts'
import StarIcon from '../../assets/icons/start'

const Ratings = ({ratings}:{ratings:string}) => {
  return (
    <View style={styles.ratingsContainer}>
    <Text style={styles.ratingText}>{ratings}</Text>
    <StarIcon />
  </View>
  )
}

export default Ratings

const styles = StyleSheet.create({  ratingsContainer: {
    paddingTop: 2,
    paddingLeft:6,
    paddingRight:3,
    gap: 3,
    backgroundColor: COLORS.orange,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 30,
  },
  ratingText: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    color: COLORS.almostWhite,
  },})