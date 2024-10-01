// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Width } from '../../utils/responsive'

// const {width} = Dimensions.get("screen")
// const SliderItem = ({item,index}:{item:string,index:number}) => {
//   return (
//     <View style={styles.itemContainer}>
//         <Image
//         style={{objectFit:"cover"}}
//         source={{uri:item,height:128,width:Width(80)}}/>
//     </View>
//   )
// }

// export default SliderItem

// const styles = StyleSheet.create({
//     itemContainer:{
//         justifyContent:'center',
//         alignItems:'center',
//         gap:20,
//         backgroundColor:"red",
//         flex:1
//     }
// })


import {Dimensions, Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {Width} from '../../utils/responsive'; // Assuming you have a responsive utility



const SliderItem = ({item,index}:{item:string,index:number}) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.itemContainer,{width}]}>
      <Image
        style={styles.image}
        source={{uri: item}}
      />
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // You can set the background color
  },
  image: {
    width: '81%',
    height: 128,
    borderRadius:20,
    objectFit:"cover"
  },
});
