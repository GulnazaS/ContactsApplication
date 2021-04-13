import React, {useRef, useState} from 'react'
import { StyleSheet, Image, SafeAreaView , View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
// import {picture} from '../images/Rectangle5.png'

// const url ='https://jsonplaceholder.typicode.com/photos?_limit=30'

    export const Screen3 = () => {
    return(
        <FlatList style= {styles.flatStyle} contentContainerStyle={styles.flatContainer}>
            {/* <TouchableOpacity>
                <View style={styles.boxPic}>
                    <Image source= {picture}/>
                    <Text style={styles.picText}> Official photo for album</Text>
                    <Text style={styles.picText}> ALBUM </Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.boxPic}>
                    <Image source= {picture}/>
                    <Text style={styles.picText}> Official photo for album</Text>
                    <Text style={styles.picText}> ALBUM </Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.boxPic}>
                    <Image source= {picture}/>
                    <Text style={styles.picText}> Official photo for album</Text>
                    <Text style={styles.picText}> ALBUM </Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.boxPic}>
                    <Image source= {picture}/>
                    <Text style={styles.picText}> Official photo for album</Text>
                    <Text style={styles.picText}> ALBUM </Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.boxPic}>
                    <Image source= {picture}/>
                    <Text style={styles.picText}> Official photo for album</Text>
                    <Text style={styles.picText}> ALBUM </Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.boxPic}>
                    <Image source= {picture}/>
                    <Text style={styles.picText}> Official photo for album</Text>
                    <Text style={styles.picText}> ALBUM </Text>
                </View> 
            </TouchableOpacity>   */}

        </FlatList>    
    )
}

const styles = StyleSheet.create({
    flatStyle:{
        display: 'flex',
        flex:1,
        backgroundColor:'black'
    },
    flatContainer:{
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picText:{
        fontWeight:'400',
        color: '#FFFFFF',
        paddingTop:10
    },
    boxPic:{
        borderColor:'white',
        borderWidth: 1,
        marginBottom:30,
        borderRadius:10
    }
})