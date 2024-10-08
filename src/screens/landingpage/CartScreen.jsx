import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeItemFromCart,
  updateItemQuantity,
  confirmOrderAndClearCart,
} from '../../store/cartSlice';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import {CloseIcon, RightIcon} from '../../assets/Icon/IconName';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleRemoveItem = id => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    dispatch(updateItemQuantity({id, quantity: newQuantity}));
  };
  const ongoingOrders = useSelector(state => state.ongoingOrders);
  console.log(ongoingOrders);
  const handlePlaceOrder = () => {
    navigate.navigate('Payment'); // Navigate to the ongoing orders screen after placing the order
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          paddingTop: 24,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 18}}>
          <BackBtn />
          <Text
            style={{
              color: '#000',
              fontSize: 17,
              lineHeight: 22,
              fontFamily: 'Sen-Regular',
            }}>
            Cart
          </Text>
        </View>
        {cartItems.length !== 0 ? (
          <TouchableOpacity onPress={handleToggleEdit}>
            <Text
              style={{
                color: isEditing ? '#059C6A' : '#FF7622',
                borderBottomWidth: 1,
                fontFamily: 'Sen-Regular',
                borderColor: isEditing ? '#059C6A' : '#FF7622',
              }}>
              {isEditing ? 'DONE' : 'EDIT ITEMS'}
            </Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text
            style={{fontSize: 20, color: '#000', fontFamily: 'Sen-Regular'}}>
            Your cart is empty
          </Text>
        </View>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 24}}>
            {cartItems.map(item => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={item.image} style={styles.cartItemImage} />
                <View style={{maxWidth: '45%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      gap: 5,
                    }}>
                    <Text
                      style={{
                        width: '100%',
                        fontSize: 18,
                        color: '#000',
                        fontFamily: 'Sen-Regular',
                      }}>
                      {item.name}
                    </Text>
                    {isEditing && (
                      <TouchableOpacity
                        style={styles.close}
                        onPress={() => handleRemoveItem(item.id)}>
                        <CloseIcon />
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Sen-Bold',
                      color: '#000',
                      marginVertical: 10,
                    }}>
                    $ {item.price * item.quantity}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#808080',
                        fontFamily: 'Sen-Regular',
                      }}>
                      {item.size}
                    </Text>
                    <View style={styles.quantityControl}>
                      <TouchableOpacity
                        style={styles.quantityButtonContainer}
                        onPress={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }>
                        <Image
                          source={require('../../assets/image/minus.png')}
                        />
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButtonContainer}
                        onPress={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }>
                        <Image
                          source={require('../../assets/image/plus.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.totalContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#A0A5BA',
                  fontSize: 14,
                  lineHeight: 24,
                  fontFamily: 'Sen-Regular',
                }}>
                DELIVERY ADDRESS
              </Text>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  textDecorationColor: '#FF7622',
                  color: '#FF7622',
                  fontFamily: 'Sen-Regular',
                }}>
                EDIT
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 22,
                paddingHorizontal: 12,
                backgroundColor: '#F0F5FA',
                borderRadius: 16,
                marginTop: 10,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#91959C',
                  fontSize: 16,
                  lineHeight: 20,
                  fontFamily: 'Sen-Regular',
                }}>
                2118 Thornridge Cir. Syracuse
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 32,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Text style={{color: '#A0A5BA', fontFamily: 'Sen-Regular'}}>
                  TOTAL:{' '}
                </Text>
                <Text
                  style={{
                    color: '#181C2E',
                    fontSize: 25,
                    fontFamily: 'Sen-Regular',
                  }}>
                  ${totalAmount.toFixed(2)}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Text style={{color: '#FF7622', fontFamily: 'Sen-Regular'}}>
                  breakdown:
                </Text>
                <RightIcon />
              </View>
            </View>
            <TouchableOpacity
              // onPress={() => {
              //   navigate.navigate('Payment');
              // }}
              onPress={handlePlaceOrder}
              style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>PLACE ORDER</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  emptyCart: {
    flex: 1,
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#000',
  },
  cartItem: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  cartItemImage: {
    width: '40%',
    height: 117,
    objectFit: 'cover',
    borderRadius: 16,
  },
  quantityButtonContainer: {
    width: 22,
    height: 22,
    borderRadius: 24,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityControl: {
    width: 80,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  quantityText: {
    fontSize: 16,
    fontFamily: 'Sen-Bold',
    color: '#000',
  },
  close: {
    width: 27,
    height: 27,
    borderRadius: 27,
    backgroundColor: '#E04444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalContainer: {
    bottom: 0,
    backgroundColor: '#fafaf6',
    height: 310,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 20,
    shadowColor: '#E32753',
    elevation: 5,
  },
  addToCartButton: {
    backgroundColor: '#ff7f00',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Sen-Bold',
  },
});

export default CartScreen;
