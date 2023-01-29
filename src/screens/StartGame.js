import { Button, TextInput } from 'react-native-paper'
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card';
import Inputs from '../components/Inputs';
import colors from '../constants/colors'

const StartGame = ({onStartGame}) => {

    const [value, setValue] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [selectedNumber, setselectedNumber] = useState('')

    const handleInput = text => { setValue(text.replace(/[^0-9]/g),"") } //todo lo que no este entre 00 y 99 lo cambia por ""
    const handleResetInput = () => {
        setValue('')
        setConfirm(false)
    }
    const handleConfirmation = () => {
        const NewValue = parseInt(value);

        NewValue !== NaN && NewValue > 0 && NewValue < 99 ? (
        setConfirm(true), 
        setselectedNumber(NewValue), 
        setValue(''),
        Keyboard.dismiss() ): null
    }
       
    return (
        <KeyboardAvoidingView style={{flex:1}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.label}>Start Game</Text>
                <Card NewStyles={styles.NewContainer}>
                    <Text style={styles.title} > Ingrese su valor ( del 00 al 99) para jugar</Text>
                    <Inputs
                        value={value}
                        onChangeText={handleInput} />
                    <View style={styles.ButtonContainer}>
                        <Button style={styles.Button} icon="delete-circle" mode="contained" onPress={handleResetInput}>
                            Limpiar
                        </Button>
                        <Button style={{ ...styles.Button, ...styles.ButtonAcept }} icon="check-circle" mode="contained" onPress={handleConfirmation}>
                            Aceptar
                        </Button>
                    </View >
                </Card >
                {confirm && (
                    <Card NewStyles={styles.selectedCard}>
                        <Text style={styles.Confirmed}> El número elegido es:</Text>
                        <Text style={styles.Number}>{selectedNumber}</Text>
                        <Button style={{ ...styles.Button, ...styles.ButtonStart }} icon="check-circle" mode="contained" onPress={()=>onStartGame(selectedNumber)}>Start</Button>
                    </Card>
                )}
            </View >
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StartGame

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.ColorPrimary,
    },
    Confirmed: {
        fontSize: 20,
        color: 'white',
    },
    selectedCard: {
        marginTop: 180,
        alignItems: 'center',
        padding: 10
    },
    NewContainer: {
        //puedo pasar estilos que sobreescriben
    },
    label: {
        color: 'white',
        fontSize: 30
    },
    Number: {
        fontSize: 40,
        color: 'white',
        padding: 5
    },

    title: {
        alignItems: 'center',
        padding: 10,
        color: 'white'
    },
    inputNumber: {
        fontSize: 50,
        alignItems: 'center',
        margin: 10,
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
    },
    ButtonContainer: {
        margin: 10,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    Button: {
        backgroundColor: colors.ColorSecondary,
        shadowColor: "white",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        marginHorizontal: 30
    },
    ButtonStart: {
        backgroundColor: colors.ColorStart,
        shadowColor: "white",
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 2 },
        elevation: 5,
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 45
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