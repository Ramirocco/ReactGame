import { StyleSheet, Text, View } from 'react-native';

import GameScreen from './src/screens/GameScreen';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import {useFonts} from "expo-font"
import { useState } from 'react';

export default function App() {
  const [loaded]= useFonts(
    {DancingScript: require("./src/assets/fonts/DancingScript-VariableFont_wght.ttf"),
  })
  const [UserNumber, setUserNumber] = useState('')
  const [wasChose, setWasChose]=useState (false)
  
  const handleStartGame = (selectedNumber) => {setUserNumber( selectedNumber)}
  
  let content = <StartGame UserNumber={UserNumber} onStartGame={handleStartGame}/>


  
  if (UserNumber){content = <GameScreen UserNumber={UserNumber} />}
  if (wasChose){content = <GameEnd/>}

  if (!loaded){return null}
  
  return (
    <View style={styles.container}>
      <Header  title={"adivinator"} NewStyles={styles.header}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    fontFamily: "DancingScript",
    fontSize:30
  }
});
