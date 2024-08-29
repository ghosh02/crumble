import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Location = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
      }}>
      <Image
        source={require('../../assets/image/locationbig.png')}
        style={{}}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SigninSuccess')}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Access location</Text>
        <Image source={require('../../assets/image/mappin.png')} />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          color: '#646982',
          fontFamily: 'Sen-Regular',
        }}>
        CRUMBLE WILL ACCESS YOUR
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#646982',
          fontFamily: 'Sen-Regular',
        }}>
        LOCATION ONLY WHILE USING THE APP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    backgroundColor: '#FF7622',
    // height: 50,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 31,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Sen-Bold',
  },
});

export default Location;
