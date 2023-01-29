import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../constants/colors'
import {useFonts} from 'expo-font'

const Card = ({ NewStyles, children}) => {
    const [loaded]= useFonts(
        {BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf")
      })

    if (!loaded) return null
    
    return (
        <View style= {{...styles.container, ...NewStyles}}>
       {children}
       </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.ColorPrimary,
        fontFamily: "BebasNeue"
    },})