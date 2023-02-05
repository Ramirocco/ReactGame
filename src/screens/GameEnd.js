import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Button } from 'react-native-paper';
import colors from '../constants/colors';
import loser from '../assets/images/loser.png'
import { useFonts } from "expo-font"
import win from '../assets/images/winner.png'

const GameEnd = ({ result, ReloadApp }) => {


  const [loaded] = useFonts(
    {
      DancingScript: require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    })
  if (!loaded) { return null }



  let Icon = ""

  if (result == "You are Loser") {  

    Icon = <Image
      style={styles.img}
      source={{
        uri: 'https://res.cloudinary.com/dkolnsx2y/image/upload/v1675611773/pngwing.com_1_utcz5r.png',
      }}/>
  } else {
    Icon =  <Image
    style={styles.img}
    source={{ 
      uri: 'https://res.cloudinary.com/dkolnsx2y/image/upload/v1675611359/pngwing.com_kgndnj.png',
    }}
  />}
  
  return (
    <View style={styles.container}>
      <Text style={styles.label} >Juego Finalizado: </Text>
      <Text style={styles.labelResult}>{result}</Text>
      {Icon}
      <Button icon="arrow-down-bold-circle" mode="contained" style={{ ...styles.Button, ...styles.ButtonReload }} onPress={ReloadApp}>Volver a jugar</Button>
    </View>)
}

export default GameEnd

const styles = StyleSheet.create({


  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.ColorPrimary,
    flex: 1,
  },

  img: {
    width: 80,
    height: 80,
    marging: 20,
  },

  label: {
    color: "white",
    margin: 30,
    fontSize: 20
  },
  labelResult: {
    color: "white",
    fontFamily: "DancingScript",
    fontSize: 50,
    marginVertical: 30
  },
  Button: {
    backgroundColor: colors.ColorSecondary,
    shadowColor: "white",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginHorizontal: 30,
    padding: 10,
    margin: 15
  },
  ButtonReload: {
    backgroundColor: colors.ColorAcept,
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowOffset: { width: 1, height: 2 },
    elevation: 5,
    marginHorizontal: 30


  }
})