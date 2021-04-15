import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
// import { Screen3 } from '../screens/Screen3'


export const Knopka = ({ onPress }) => (
<TouchableOpacity style={styles.knopka} 
    onPress ={() => onPress(3)}>
        <Text style={styles.knopkaText}>SUBMIT</Text> 
</TouchableOpacity>)

// export const Knopka = ({ setActiveScreen }) => (
//     <View style ={styles.root}>
//         {knopkaname.map((item, index)=>(
//         <TouchableOpacity style={styles.knopka} 
//         onPress ={() => setActiveScreen (index+ 2)}>
//             <Text style= {styles.knopkaText}>
//                 {item.toUpperCase()}
//             </Text>
//         </TouchableOpacity>
//     ))}
//     </View>
// )

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