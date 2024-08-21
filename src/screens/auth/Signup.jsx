import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',

          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <Image
          source={require('../../assets/image/upellipse.png')}
          style={{position: 'absolute', top: 0, left: 0}}
        />
        <Image
          source={require('../../assets/image/lineleft.png')}
          style={{position: 'absolute', top: 0, right: 0}}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 40,
            top: 20,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/image/Backarrow.png')} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/image/crumble.png')}
            style={{
              width: 103,
              height: 103,
            }}
          />
          <Text style={{fontWeight: 700, fontSize: 30, color: '#FFF'}}>
            Sign up
          </Text>
          <Text style={{fontWeight: 400, fontSize: 16, color: '#FFF'}}>
            Please sign up to get started
          </Text>
        </View>
      </View>

      <ScrollView
        style={{
          width: '100%',
          marginTop: 235,
          padding: 24,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          backgroundColor: '#FFF',
        }}>
        <Text style={styles.text}>NAME</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor={'#676767'}
          style={styles.input}
        />
        <Text style={styles.text}>EMAIL OR PHONE</Text>
        <TextInput
          placeholder="Email or Phone"
          placeholderTextColor={'#676767'}
          style={styles.input}
        />
        <Text style={styles.text}>PASSWORD</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F0F5FA',
            paddingHorizontal: 10,
            height: 62,
            borderRadius: 8,
          }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#676767'}
            secureTextEntry
            style={{color: '#676767'}}
            // style={styles.input}
          />
          <Image source={require('../../assets/image/eye.png')} />
        </View>
        <Text style={[styles.text, {marginTop: 10}]}>RE-TYPE PASSWORD</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F0F5FA',
            paddingHorizontal: 10,
            height: 62,
            borderRadius: 8,
          }}>
          <TextInput
            placeholder="Re-type Password"
            placeholderTextColor={'#676767'}
            secureTextEntry
            style={{color: '#676767'}}
            // style={styles.input}
          />
          <Image source={require('../../assets/image/eye.png')} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OTPVerify')}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#FF7622',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    height: 62,

    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    color: '#676767',
    backgroundColor: '#F0F5FA',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#FFF',
  },
  loginButton: {
    backgroundColor: '#FF7622',
    height: 62,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 38,
  },
  signUpText: {
    color: '#FF7622',
    fontWeight: 'bold',
  },
  text: {
    color: '#32343E',
    fontSize: 13,
    marginBottom: 8,
  },
});

export default Signup;
