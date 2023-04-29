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

const Awal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi</Text>
      <Text style={styles.title}>Estimate Pro</Text>
      <Logo/>
      <Menu navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A5D7E8',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
    color: '#0B2447',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#19376D',
    borderRadius: 30,
    padding: 10,
    width: 200,
    marginBottom: 10,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold'
  },
  pencapaian: {
    fontSize: 18,
    color: '#154198',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

});
const Logo = () => {
  return (
    <Image source={require('./LOGO.png')} style={styles.logo}/>
  );
};
const Menu = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Estimate")}>
        <Text style={styles.buttonText}>MULAI</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Awal;