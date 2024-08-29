import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SigninSuccess = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FF7622'}}>
      <Image
        source={require('../../assets/image/lineright.png')}
        style={{position: 'absolute'}}
      />
      <Image
        source={require('../../assets/image/rightellipse.png')}
        style={{position: 'absolute', right: 0, top: 0}}
      />
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          source={require('../../assets/image/crumble.png')}
          style={{width: 278, height: 278}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 20,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          paddingHorizontal: 27,
          paddingVertical: 37,
        }}>
        <Text style={{fontSize: 37, color: '#000', fontFamily: 'Sen-Bold'}}>
          Sign up
        </Text>
        <Text style={{fontSize: 37, color: '#000', fontFamily: 'Sen-Bold'}}>
          successful!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#391713',
            marginTop: 33,
            fontFamily: 'Sen-Regular',
          }}>
          Sweet success! You're in. Get ready to satisfy your cravings and
          collect some treats.
        </Text>
        <View style={{marginTop: 33, gap: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={require('../../assets/image/cup.png')} />
            <Text
              style={{
                fontSize: 16,
                color: '#391713',
                fontFamily: 'Sen-Regular',
              }}>
              Explore nearby cafes and desserts.
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={require('../../assets/image/card.png')} />
            <Text
              style={{
                fontSize: 16,
                color: '#391713',
                fontFamily: 'Sen-Regular',
              }}>
              Enjoy the loyalty programs.
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={require('../../assets/image/gift.png')} />
            <Text
              style={{
                fontSize: 16,
                color: '#391713',
                fontFamily: 'Sen-Regular',
              }}>
              Surprise your loved ones.
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Treat yourself</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: '#FF7622',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Sen-Bold',
  },
});

export default SigninSuccess;
