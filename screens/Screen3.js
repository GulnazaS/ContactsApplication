import React from 'react'
import { StyleSheet, FlatList, Image, View, Text, TouchableOpacity } from 'react-native'
import picture from '../images/Rectangle5.png'

// const url ='https://jsonplaceholder.typicode.com/photos?_limit=30'

export const Screen3 = () => {
     return(
        <View style= {styles.flatStyle}>
            <Image source= {picture}/>
            <Text> Official photo for album</Text>
            <Text> ALBUM </Text>
        </View>     
    )
}

const styles = StyleSheet.create({
    flatStyle:{
        // backgroundColor:'black'
    }
})