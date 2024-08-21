import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: 45,
        height: 45,
        backgroundColor: '#0000000d',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        shadowColor: '#000',
      }}>
      <Image source={require('../assets/image/Backarrow.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackBtn;
