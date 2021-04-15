import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Screen3 } from '../screens/Screen3'



export const Knopka = ({ onPress }) => (
<TouchableOpacity style={styles.knopka} 
    onPress ={() => onPress(Screen3)}>
        <Text style={styles.knopkaText}>SUBMIT</Text> 
</TouchableOpacity>)

// const Knopka = ({ setActiveScreen }) => (
//     <TouchableOpacity style={styles.knopka} 
//     onPress ={() => setActiveScreen (Screen3)}>
//       <Text style={styles.knopkaText}>SUBMIT</Text> 
//     </TouchableOpacity>)  

const styles = StyleSheet.create({
    Knopka:{
        backgroundColor:'#00ADD3',
        flexDirection:'column',
        justifyContent:'flex-end',
        width:265,
        height:51,
        borderRadius:40,
        marginTop: 80
    },
        knopkaText:{
        textAlign:'center',
        justifyContent:'center',
        color:'white',
        fontWeight:'400',
        marginBottom:15
    }
})