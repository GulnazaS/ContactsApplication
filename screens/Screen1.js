import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { UserCard } from '../components/UserCard'

export const Screen1 = ({ data }) => {
  return (
    <ScrollView 
      style = {styles.scrollStyle} 
      contentContainerStyle = {styles.scrollContainer}>
      {data.map((item) => (
        <UserCard
          userName={item.name}
          userPhone={item.phone}
          userPic={item.userPic}
          userAddress={item.address.city}
          userMail={item.email}
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
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

