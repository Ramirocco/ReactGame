import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../constants/colors'

const Header = ({title, NewStyles}) => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.title, ...NewStyles}}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.ColorThridy,
        height: 90,
        paddingTop:36,
        alignItems: 'center',
        justifyContent: "center",
        paddingBottom:10
    },
    title:{
        color: "white",
        fontSize: 22
    }
})