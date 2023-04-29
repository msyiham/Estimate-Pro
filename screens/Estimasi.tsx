import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function App({navigation}) {
  const [waktuSudahBerlalu, setWaktuSudahBerlalu] = useState('');
  const [sisaWaktu, setSisaWaktu] = useState('');
  const [intervalWaktu, setIntervalWaktu] = useState('');
  const [totalEstimasiSisaWaktu, setTotalEstimasiSisaWaktu] = useState('');

  const hitungEstimasiWaktu = () => {
    const totalWaktu = parseFloat(waktuSudahBerlalu) + parseFloat(sisaWaktu);
    const jumlahSubinterval = totalWaktu / intervalWaktu;
    let luasSegiempat, estimasiSisaWaktu = 0;

    for (let i = 0; i < jumlahSubinterval; i++) {
      const batasBawah = i * intervalWaktu;
      const batasAtas = (i + 1) * intervalWaktu;
      const sisaWaktuInterval = totalWaktu - batasBawah;

      luasSegiempat = intervalWaktu * sisaWaktuInterval;
      estimasiSisaWaktu += luasSegiempat;
    }

    setTotalEstimasiSisaWaktu(estimasiSisaWaktu.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KALKULATOR</Text>
      <Text style={styles.label}>Waktu Sudah Berlalu (dalam satuan jam):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setWaktuSudahBerlalu}
        value={waktuSudahBerlalu}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Sisa Waktu (dalam satuan jam):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSisaWaktu}
        value={sisaWaktu}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Interval Waktu (dalam satuan jam):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setIntervalWaktu}
        value={intervalWaktu}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={hitungEstimasiWaktu}>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', }}>Hitung Estimasi Waktu</Text>
      </TouchableOpacity>
      <Text style={styles.hasil}>
        Estimasi Sisa Waktu:
      </Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.kotakhasil}>
          <Text style={styles.hasil}>{totalEstimasiSisaWaktu}</Text>
        </View>
        <Text style={styles.hasil}>
          jam
        </Text>
      </View>

      <BottomBar navigation={navigation}></BottomBar>
    </View>
  );
}
const BottomBar = ({navigation}) => {
    return(
      <View style={styles.bar}>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.bottomBarActive} onPress={() => navigation.navigate("Estimate")}>
                <Icon name="calculator" size={30} color="#19376D" />
                <Text style={styles.buttonTextActive}>Kalkulator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBar} onPress={() => navigation.navigate("Panduan")}>
                <Icon name="book" size={30} color="white" />
                <Text style={styles.buttonText}>Panduan</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A5D7E8',
    padding: 20,
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#0B2447',
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
  button: {
    backgroundColor: '#19376D',
    borderRadius: 5,
    padding: 10,
    width: 200,
    marginBottom: 10,
    marginTop: 5,
  },
});
