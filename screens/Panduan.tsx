import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  const Panduan = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Panduan</Text>
        <BottomBar navigation={navigation}></BottomBar>
      </View>
    );
  };
  const BottomBar = ({navigation}) => {
    return(
      <View style={styles.bar}>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.bottomBar} onPress={() => navigation.navigate("Estimate")}>
                <Icon name="calculator" size={30} color="white" />
                <Text style={styles.buttonText}>Kalkulator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBarActive} onPress={() => navigation.navigate("Estimate")}>
                <Icon name="book" size={30} color="#19376D" />
                <Text style={styles.buttonTextActive}>Panduan</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A5D7E8',
      padding: 20,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 50,
      color: '#0B2447',
    },
    bar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      backgroundColor: '#576CBC',
      alignItems: 'center'
    },
    bottomBar:{
      backgroundColor: '#576CBC',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 50,
      height:70,
      width:120,
      alignItems: 'center',
    },
    bottomBarActive:{
      backgroundColor: '#A5D7E8',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 50,
      height:70,
      width:120,
      alignItems: 'center',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#0B2447',
    },
    input: {
      borderWidth: 1,
      color:'black',
      borderColor: '#19376D',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      fontSize: 16,
      width: '100%',
    },
    kotakhasil: {
      borderWidth: 1,
      color:'black',
      borderColor: '#19376D',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      fontSize: 16,
      width: '80%',
      marginEnd: 10
    },
    hasil: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      color: '#0B2447'
    },
    buttonText:{
      color: 'white',
      textAlign:'center',
    },
    buttonTextActive:{
      color: '#19376D',
      textAlign:'center',
    },
  
  });
  export default Panduan;