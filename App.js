import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {UserCard} from './components/UserCard';
import {DATA} from './components/Data.js';


const App = () => {
    return (
    <ScrollView 
      style = {styles.scrollStyle} 
      contentContainerStyle = {styles.scrollContainer}>
        {DATA.map(item  => (
          <UserCard
            userName = {item.userName} 
            userPhone = {item.userPhone} 
            userPic = {item.userPic}
            userAddress = {item.addressDescription}
            userMail = {item.emailsDescription}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollStyle:{
    flex:1,
  },
  scrollContainer:{
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;