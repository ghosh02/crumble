import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CartScreen');
      }}
      style={styles.cart}>
      <Image source={require('../assets/image/cart.png')} />
      {cartItems.length !== 0 && (
        <View style={styles.cartitem}>
          <Text style={{color: 'white', fontWeight: 700, fontSize: 16}}>
            {cartItems.length}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cart: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#181C2E',
    zIndex: 10,
  },
  cartitem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#FF7622',
    position: 'absolute',
    top: -5,
    right: 0,
  },
});

export default Cart;
