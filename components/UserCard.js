import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View, 
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager
  } from 'react-native'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
){
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AddresBlock = ({ title, description }) => {
    return(
      <>
        <View style= {styles.addressBox}>
          <View style ={styles.infoBox}>
            <Text style ={styles.infoTitle}>{title}</Text>
            <Text style ={styles.infoContent}>{description}</Text>
          </View>
        </View>
      </>
    )
  }
  
  export const UserCard = ({
    userName,
    userPhone,
    userPic,
    userAddress,
    userMail
  }) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const handlePress = () => {
      setIsOpen (!isOpen)
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    }

    return (
      <>
        <TouchableOpacity style={[styles.cardStyle, { height: isOpen ? 190 : 100 }]} onPress={handlePress}>
          <View style={styles.mainBox}>
            <View style={styles.iconStyle}>
              <Image style={styles.stylePic} source={{uri:userPic}} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.nameStyle}>{userName}</Text>
              <Text style={styles.phoneStyle}>{userPhone}</Text>
            </View>
          </View>
          {isOpen && (
            <View style={styles.hiddenBox}>
              <AddresBlock title="ADDRES" description={userAddress} />
              <AddresBlock title="EMAIL" description={userMail} />
            </View>
          )}
        </TouchableOpacity>
      </>
    )
  }
  
  const styles = StyleSheet.create({
    nameStyle: {
      fontSize: 21,
      fontWeight: '700',
      color: '#00ADD3'
    },
    cardStyle: {
      width: 363,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      marginBottom: 20
    },
    iconStyle:{
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    stylePic: {
      width: 60,
      height: 60,
      borderWidth: 5,
      borderColor: '#00ADD3',
      borderRadius: 30,
      marginLeft:30
    },
    mainBox: {
      flexDirection: 'row',
      paddingTop: 20
    },
    hiddenBox:{
      // paddingLeft:100,
      // marginLeft:26
    },
    phoneStyle: {
      fontSize: 15,
      fontWeight: '400',
      color: '#00ADD3'
    },
    titleBox: {
      flex: 6,
      justifyContent: 'center',
      paddingLeft:35
    },
    infoTitle: {
      fontSize: 12,
      fontWeight: '800',
      color: '#00ADD3'
    },
    infoContent: {
      fontSize: 12,
      fontWeight: '400',
      color: '#0A0A0A'
    },
    addressBox: {
      paddingTop: 10,
      flexDirection: 'row'
    },
    infoBox: {
      flex: 6
    },
    scrollStyle: {
      flex: 1
    },
    scrollContainer: {
      paddingTop: 100,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  