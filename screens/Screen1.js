import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { UserCard } from '../components/UserCard'

export const Screen1 = ({ data }) => {
  return (
    <ScrollView 
      style = {styles.scrollStyle} 
      contentContainerStyle = {styles.scrollContainer}>
      {data.map(item  => (
        <UserCard
          userName = {item.userName} 
          userPhone = {item.userPhone} 
          userPic = {item.userPic}
          userAddress = {item.addressDescription}
          userMail = {item.emailDescription}
        />
      ))}
    </ScrollView>
  ) 
}
const styles = StyleSheet.create({
  scrollStyle:{
    flex:1
  },
  scrollContainer:{
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
