import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native'
import { UserCard } from './components/UserCard'
import { DATA } from './Data'
import { TapBar } from './components/TapBar'
import { Header } from './components/Header'
import { Screen1 } from './screens/Screen1'
import { Screen2 } from './screens/Screen2'

const screenTitles = ['Contacts', 'Log In']

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1)
  const [ isLoading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [ refresh, setRefresh ] =useState(false)

  return (
    <View style={styles.root}>
      <Header titlesArray={screenTitles} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === 1 ? <Screen1 data={data} /> : <Screen2 />}
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