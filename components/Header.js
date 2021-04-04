import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonCircle} from './components/ButtonCircle.js';

export const Header = ({ titleArray, activeScreen, setActiveScreen}) =>(
    <View style ={styles.root}>
        {activeScreen === 2 &&
        <ButtonCircle onPress ={setActiveScreen}/>}
        <Text style={styles.headerText}>{titleArray[activeScreen - 1]}</Text>
    </View>
)

const styles =StyleSheet.create({
    root:{
        paddingTop: 50,
        marginBottom: 10,
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 36,
        fontWeight: '100',
        color: '#0A0A0A',
    },
    ButtonCircle:{
        width: 40,
        height: 40,
        backgroundColor: '#0A0A0A',
        borderRadius:20,
    }
});