import React from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image
  } from 'react-native';

const AddressBlock = ({title, description}) => {
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
  };
  
  export const UserCard = ({
    userName,
    userPhone,
    userPic,
    userAddress,
    userMail
  }) =>{
    return(
      <>
        <View style={styles.cardStyle}>
          <View style={styles.mainBox}>
            <View style ={styles.stylePic}>
              <Image style={styles.styleIcon} source={userPic}></Image>
            </View>
            <View style={styles.titleBox}>
              <Text style ={styles.nameStyle}>{userName}</Text>
              <Text style ={styles.phoneStyle}>{userPhone}</Text>
            </View>
          </View>
          <View style={styles.hiddenBox}>
            <AddressBlock title= 'ADDRESS' description={userAddress}></AddressBlock>
            <AddressBlock title= 'EMAIL' description={userMail}></AddressBlock>
          </View>
        </View>  
      </>
    )
  };
  const styles = StyleSheet.create({
    nameStyle: {
      fontSize: 21,
      fontWeight: '700',
      color: '#00ADD3',
    },
    cardStyle: {
      width: 363,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      marginBottom: 20,
    },
    styleIcon: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderWidth: 5,
      borderColor: '#00ADD3',
      borderRadius: 30,
      marginLeft:25,
    },
    mainBox: {
      flexDirection: 'row',
      paddingTop: 20,
    },
    hiddenBox:{
      paddingTop: 20,
    },
    phoneStyle: {
      fontSize: 15,
      fontWeight: '400',
      color: '#00ADD3',
    },
    titleBox: {
      flex: 6,
      justifyContent: 'center',
      paddingLeft:30,
    },

    infoTitle: {
      fontSize: 12,
      fontWeight: '800',
      color: '#00ADD3',
    },
    infoContent: {
      fontSize: 12,
      fontWeight: '400',
      color: '#0A0A0A',
    },
    addresBox: {
      paddingTop: 10,
      flexDirection: 'row',
    },
    infoBox: {
      flex: 6,
    },
    spacer: {
      flex: 3,
    },
    scrollStyle: {
      flex: 1,
    },
    scrollContainer: {
      paddingTop: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  