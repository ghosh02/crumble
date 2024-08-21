import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomOTPFleld from '../../components/CustomOTPFleld';
import {useNavigation} from '@react-navigation/native';

const OTPVerify = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 170,
          height: 170,
          borderRadius: 170,
          backgroundColor: '#FF7622',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: -100,
          left: 0,
          width: 170,
          height: 170,
          borderRadius: 170,
          backgroundColor: '#FFBD69',
          zIndex: 10,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: -40,
          left: -40,
          width: 96,
          height: 96,
          borderRadius: 96,

          backgroundColor: '#FF7622',
        }}
      />
      <View style={{top: 30}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 10,
            // top: 70,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            shadowColor: '#000',
            left: 10,
          }}>
          <Image source={require('../../assets/image/Backarrow.png')} />
        </TouchableOpacity>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Image
            source={require('../../assets/image/crumble.png')}
            style={{
              width: 103,
              height: 103,
            }}
          />

          <View
            style={{
              alignItems: 'flex-start',
              width: '100%',
              paddingHorizontal: 26,
            }}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 37}}>
              Verification Code
            </Text>
            <Text
              style={{
                color: '#9796A1',
                fontWeight: 400,
                fontSize: 14,
                marginTop: 12,
              }}>
              Please type the verification code sent to
            </Text>
            <Text
              style={{
                color: '#9796A1',
                fontWeight: 400,
                fontSize: 14,
                marginTop: 6,
              }}>
              prelookstudio@gmail.com
            </Text>
          </View>
          <CustomOTPFleld page={'Location'} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#5B5B5E'}}>
              I don't recevie a code!{' '}
            </Text>

            <TouchableOpacity>
              <Text style={{color: '#FF7622', fontSize: 16, fontWeight: 700}}>
                Please resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OTPVerify;
