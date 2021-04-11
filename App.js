import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native'
// import  { UserCard }  from './components/UserCard.js'
// import { DATA } from '../Data'
import { TapBar } from './components/TapBar'
import { Header } from './components/Header'
import { Screen1 } from './screens/Screen1'
import { Screen2 } from './screens/Screen2'
import { Screen3 } from './screens/Screen3'

const screenTitles = ['Contacts', 'Log In', 'Gallery']
const url = 'https://randomuser.me/api/?results=50'

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1)
  const [ isLoading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [ refresh, setRefresh ] =useState(false)

  useEffect(()=>{
    asyncHandler()
  }, [refresh])

  const asyncHandler = async () => {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setData(users)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alertHandler(error)
    }
  }

  
  const alertHandler = (error) =>
    Alert.alert(
      `${error}`,
      'Repeat the request?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => setRefresh(!refresh) }
      ],
      { cancelable: false }
    )

  if (isLoading) {
    return <ActivityIndicator style={styles.indicatorStyle} size="large" color="black" />
  }

  return (
    <View style={styles.root}>
      <Header titlesArray={screenTitles} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === 1 ? <Screen1 data={data} /> : activeScreen === 2? <Screen2 />: <Screen3 />}
      <TapBar setActiveScreen={setActiveScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollStyle: { flex: 1 },
  scrollContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    paddingHorizontal: 25,
    flex: 1
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
  },
  indicatorStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App