import React, { useState } from 'react'
import {StyleSheet, ScrollView, View} from 'react-native';
import {UserCard} from './components/UserCard';
import {DATA} from './components/Data.js';
import {TapBar} from './components/TapBar.js';
import {Header} from './components/Header.js';
import {Screen2} from './screens/Screen2.js';

const screenTitles = ['Contacts', 'Log In']

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1)
    return (
      <View style = {styles.root}>
        <Header titlesArray = {screenTitles}
        activeScreen = {activeScreen}
        setActiveScreen = {setActiveScreen} />
        {activeScreen === 1 ? (
          <ScrollView 
            style = {styles.scrollStyle} 
            contentContainerStyle = {styles.scrollContainer}>
              {DATA.map(item  => (
                <UserCard
                  userName = {item.userName} 
                  userPhone = {item.userPhone} 
                  userPic = {item.userPic}
                  userAddress = {item.addressDescription}
                  userMail = {item.emailDescription}
                />
              ))}
          </ScrollView>
         ) : (
           <Screen2 /> 
        )}
         <TapBar setActiveScreen = {setActiveScreen} />
      </View>
  )
}

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