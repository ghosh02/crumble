import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {confirmOrder, cancelOrder} from '../store/ongoingOrdersSlice';
import {addOrderToHistory} from '../store/orderHistorySlice';

const OngoingOrders = () => {
  const ongoingOrders = useSelector(state => state.ongoingOrders);

  const dispatch = useDispatch();

  const handleConfirm = order => {
    dispatch(confirmOrder(order));
    dispatch(addOrderToHistory({...order, status: 'delivered'}));
  };

  const handleCancel = order => {
    dispatch(cancelOrder(order));
    dispatch(
      addOrderToHistory({
        ...order,
        status: 'cancelled',
        cancelledAt: new Date().toISOString(),
      }),
    );
  };

  const renderItem = ({item}) => (
    <View style={{}}>
      {item.items.map((orderItem, index) => (
        <View key={index}>
          <Text
            style={{
              color: '#181C2E',
              fontFamily: 'Sen-Regular',
              letterSpacing: 0.7,
              borderColor: '#EEF2F6',
              borderBottomWidth: 1,
              paddingBottom: 16,
              marginTop: 15,
            }}>
            {orderItem.category}
          </Text>
          <View style={styles.historyContainer}>
            <Image
              source={orderItem.image}
              style={{
                width: 60,
                height: 60,
                objectFit: 'cover',
                borderRadius: 10,
              }}
            />
            <View style={{flex: 1, gap: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>{orderItem.name}</Text>
                <Text
                  style={{
                    color: '#6B6E82',
                    fontFamily: 'Sen-Regular',
                    textDecorationLine: 'underline',
                  }}>
                  #{item.id}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <Text style={styles.text}>$ {item.amount}</Text>
                <View
                  style={{
                    height: 16,
                    borderRightWidth: 2,
                    borderColor: '#CACCDA',
                  }}
                />
                <Text style={{color: '#6B6E82', fontFamily: 'Sen-Regular'}}>
                  {orderItem.quantity} Items
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#FF7622'}]}>
          <Text style={[styles.buttonText, {color: '#fff'}]}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {borderColor: '#FF7622', borderWidth: 1}]}
          onPress={() => handleCancel(item)}>
          <Text style={[styles.buttonText, {color: '#FF7622'}]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      {ongoingOrders.length > 0 ? (
        <FlatList
          data={ongoingOrders.filter(order => order.status === 'ongoing')}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{height: 24}} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/image/order.png')}
            style={{width: 130, height: 100, objectFit: 'contain'}}
          />
          <Text
            style={{
              color: '#000',
              fontFamily: 'Sen-Bold',
              fontSize: 28,
              marginTop: 28,
            }}>
            No orders yet
          </Text>
          <Text
            style={{
              color: '#6E6E6E',
              width: '60%',
              textAlign: 'center',
              fontFamily: 'Sen-Regular',
              lineHeight: 20,
              letterSpacing: 0.5,
              marginTop: 10,
            }}>
            Hit the orange button down below to Create an order
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Start Ordering</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 16,
  },
  button: {
    width: 140,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Sen-Bold',
  },
  text: {fontSize: 17, fontFamily: 'Sen-Bold', color: '#181C2E'},
  addToCartButton: {
    position: 'absolute',
    backgroundColor: '#ff7f00',
    width: '100%',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    bottom: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Sen-Bold',
  },
});
export default OngoingOrders;
