import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {confirmOrderAndClearCart} from '../../store/cartSlice';

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  handleAddToHistory = () => {
    dispatch(confirmOrderAndClearCart());
    navigation.navigate('MyOrders');
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <LinearGradient
          colors={['#FF7622', '#FFBD69']}
          style={styles.background}>
          <Image
            source={require('../../assets/image/tick.png')}
            style={{width: 80, height: 52, objectFit: 'contain'}}
          />
        </LinearGradient>
        <Text style={styles.title}>Congratulation!</Text>
        <Text style={styles.subtitle}>
          You successfully maked a payment, enjoy our service!
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleAddToHistory}
        style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>TRACK ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: 130,
    height: 130,
    borderRadius: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#111A2C',
    fontSize: 24,
    fontFamily: 'Sen-Bold',
    marginTop: 50,
  },
  subtitle: {
    width: '70%',
    textAlign: 'center',
    color: '#525C67',
    lineHeight: 24,
    marginTop: 16,
    fontFamily: 'Sen-Regular',
  },
  addToCartButton: {
    backgroundColor: '#ff7f00',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 24,
    bottom: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Sen-Bold',
  },
});

export default PaymentSuccess;
