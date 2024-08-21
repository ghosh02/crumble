import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Btn from '../../components/Btn.jsx';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const images = [
    {id: 1, src: require('../../assets/image/fb.png'), bgColor: '#3B5998'},
    {id: 2, src: require('../../assets/image/x.png'), bgColor: '#169CE8'},
    {id: 3, src: require('../../assets/image/apple.png'), bgColor: '#1B1F2F'},
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          source={require('../../assets/image/upellipse.png')}
          style={{position: 'absolute', top: 0, left: 0}}
        />
        <Image
          source={require('../../assets/image/lineleft.png')}
          style={{position: 'absolute', top: 0, right: 0}}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // top: 23,
          }}>
          <Image
            source={require('../../assets/image/crumble.png')}
            style={{
              width: 103,
              height: 103,
            }}
          />
          <Text style={{fontWeight: 700, fontSize: 30, color: '#FFF'}}>
            Log in
          </Text>
          <Text style={{fontWeight: 400, fontSize: 16, color: '#FFF'}}>
            Please sign in to your existing account
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
          marginTop: 50,
          padding: 24,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          backgroundColor: '#FFF',
        }}>
        <Text style={styles.text}>Email or Phone</Text>
        <TextInput
          placeholder="Email or Phone"
          placeholderTextColor={'#676767'}
          style={styles.input}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#676767'}
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderColor: '#E3EBF2',
                borderRadius: 3,
              }}
            />
            <Text style={{color: '#7E8A97'}}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={{color: '#FF7622'}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={{color: '#646982'}}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', marginTop: 27, color: '#646982'}}>
          Or
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          {images.map(item => (
            <TouchableOpacity
              key={item.id}
              style={{
                padding: 6,
                borderRadius: 50,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: item.bgColor,
              }}>
              <Image source={item.src} style={{}} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
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
    color: '#676767',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
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

export default Signin;
