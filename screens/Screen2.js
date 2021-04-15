import React, { useState } from 'react'
import { StyleSheet, ScrollView, TextInput, View, Text, TouchableOpacity, Button } from 'react-native'
// import  Screen3  from './Screen3'
import Knopka from '../components/Button'
// import { Header } from '../components/Header'

  export const Screen2 = () => {
  const [valueLogin, setValueLogin] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  // const Knopka = ({ setActiveScreen }) => (
  //   <TouchableOpacity style={styles.knopka} 
  //   onPress ={() => setActiveScreen (Screen3)}>
  //     <Text style={styles.knopkaText}>SUBMIT</Text> 
  //   </TouchableOpacity>)  
   
  return (
    // <Header title ="Log In" />
    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your Login"
        value={valueLogin}
        onChangeText={setValueLogin}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your Password"
        value={valuePassword}
        onChangeText={setValuePassword}
      />
       {/* <TouchableOpacity style={styles.knopka} 
        onPress ={() => setActiveScreen (Screen3)}>
          <Text style={styles.knopkaText}>SUBMIT</Text> 
      </TouchableOpacity> */}
      <Knopka />
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  scrollStyle: { flex: 1 },
  scrollContainer: {
    paddingTop: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    width: '100%',
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 30,
    borderRadius: 20,
    fontSize: 18
  }
  // knopka:{
  //   backgroundColor:'#00ADD3',
  //   flexDirection:'column',
  //   justifyContent:'flex-end',
  //   width:265,
  //   height:51,
  //   borderRadius:40,
  //   marginTop: 80
  // },
  // knopkaText:{
  //   textAlign:'center',
  //   justifyContent:'center',
  //   color:'white',
  //   fontWeight:'400',
  //   marginBottom:15
  // }
})

