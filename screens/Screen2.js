import React, { useState }  from 'react';
import {StyleSheet, ScrollView, TextInput, Text} from 'react-native';

export const Screen2 = () =>{
    const [valueLogin, setvalueLogin] = useState('')
    const [valuePassword, setvaluePassword]= useState('')
    return(
        <ScrollView style= {styles.scrollStyle}
        contentContainerStyle ={styles.contentContainerStyle}>
            <Text styles = {{fontWeight: 'bold', fontSize: 20}}>
                {valueLogin}
            </Text>
            <TextInput
                style = {styles.inputStyle}
                placeholder = "Enter your Login"
                value = {valueLogin}
                onChangeText = {setvalueLogin}
                />
            <TextInput
                style = {styles.inputStyle}
                placeholder = "Enter your Password"
                value = {valuePassword}
                onChangeText = {setvaluePassword}
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1
    },
    scrollContainer :{
        paddingTop: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle:{
        width: '100%',
        height: 55,
        margin: 12,
        borderWidth: 1,
        borderColor: '#E5E5E5'
    },
})

