import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  const Panduan = ({navigation}) => {
    return (
      <ImageBackground source={require('./bg.png')} resizeMode='cover' style={styles.ImageBackground}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>Panduan</Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>1.</Text> Masukkan data waktu yang sudah berlalu dan data sisa waktu yang diperlukan untuk menyelesaikan proyek.</Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>2.</Text> Data waktu yang sudah berlalu dan data sisa waktu tersebut digunakan untuk menghitung total waktu yang dibutuhkan untuk menyelesaikan proyek. </Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>3.</Text> Tentukan interval waktu yang akan digunakan untuk melakukan perhitungan integrasi numerik metode segiempat.</Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>4.</Text> Interval waktu dapat ditentukan dengan dengan cara mengurangi total waktu dengan waktu yang sudah berlalu pada interval waktu tersebut. </Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>5.</Text> Setelah interval waktu ditentukan, klik tombol "Hitung Estimasi Waktu" untuk membagi total waktu yang dibutuhkan untuk menyelesaikan proyek menjadi beberapa interval waktu yang telah ditentukan sebelumnya.</Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>6.</Text> Periksa hasil estimasi sisa waktu yang dibutuhkan untuk menyelesaikan proyek pada setiap interval waktu yang telah ditentukan sebelumnya.</Text>
          <Text style={styles.isi}><Text style={{fontWeight:'bold'}}>7.</Text> Gunakan hasil estimasi sisa waktu tersebut untuk memperkirakan waktu selesai proyek pada setiap interval waktu yang telah ditentukan sebelumnya.</Text>
        </ScrollView>
        <BottomBar navigation={navigation}></BottomBar>
      </View>
    </ImageBackground>


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
    ImageBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    scroll: {
      marginBottom: 50
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#0B2447',
      textAlign:'center'
    },
    isi: {
      fontSize: 20,
      fontWeight: '400',
      marginBottom: 5,
      textAlign:'justify',
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