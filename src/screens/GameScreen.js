import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

import { Button } from 'react-native-paper';
import Card from '../components/Card';
import colors from '../constants/colors';

const GameScreen = ({UserNumber, setWasChose, setresult, result }) => {
    const [currentGuess, setCurrentGuess] = useState()

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, [])

    const DisplayEnd = (label)=> {
        setresult (label);
        setWasChose (true);
    }
    
    const verify = (currentGuess, selection)=>{ (currentGuess>UserNumber && selection == "higher")||(currentGuess<UserNumber && selection == "lower") ? DisplayEnd("You are Winner") : DisplayEnd("You are Loser")}
   
    
    
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
            <Text style={styles.text}>¿Ud. cree que </Text>
            <Text style={{...styles.text, ...styles.textNumber}}>{currentGuess}</Text>
            <Text style={styles.text}>es Menor o Mayor que el número elegido?</Text>
            </View>
            <Card NewStyles={styles.ButtonContainer}>
                <Button icon="arrow-down-bold-circle"  mode="contained" style={{ ...styles.Button, ...styles.ButtonAcept }} onPress={()=>verify(currentGuess, "lower")}>menor</Button>
                <Button icon="arrow-up-bold-circle" mode="contained" style={{ ...styles.Button, ...styles.ButtonAcept }} onPress={()=>verify(currentGuess, "higher")}>mayor</Button>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.ColorPrimary,
    },
    containerText:{
        justifyContent: 'center',
        flex:2
    },
    text:{
        color: 'white',
        fontSize:30,
        textAlign:'center'
    },
    textNumber:{
        fontSize:50
    },
    ButtonContainer: {
        flex:1,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'start'
    },

    Button: {
        backgroundColor: colors.ColorSecondary,
        shadowColor: "white",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        marginHorizontal: 30,
        padding: 20,
    },
    ButtonAcept: {
        backgroundColor: colors.ColorAcept,
        shadowColor: "white",
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 2 },
        elevation: 5,
        marginHorizontal: 30

    }
})