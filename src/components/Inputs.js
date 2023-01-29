import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { TextInput } from 'react-native-paper'

const Inputs = ({newStyles, handleInput, ...restProps}) => {
  return (
    <View>
      <TextInput
      //para mandar props por padre
      style={{...styles.inputs, ...newStyles}}
      keyboardType='number-pad'
      maxLength={2}
      min Length={2}
      Type={'outlined'}
      {...restProps}></TextInput>
      
    </View>
  )
}

export default Inputs

const styles = StyleSheet.create({
  inputs: {
    fontSize: 50,
    alignItems: 'center',
    margin: 40,
    padding: 5,
    width: 300,
    height: 200,
    backgroundColor: 'white',
    color: 'white',
    shadowColor: 'blue',
    shadowRadius: 25,
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10
  }
})