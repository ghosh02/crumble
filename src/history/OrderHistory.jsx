import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addOrderToOngoing} from '../store/ongoingOrdersSlice';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const orderHistory = useSelector(state => state.orderHistory);

  const formatDateTime = isoString => {
    const options = {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(isoString)
      .toLocaleDateString('en-US', options)
      .replace(',', '');
  };
  const handleReOrder = item => {
    const newOrder = {
      ...item,
      id: new Date().getTime().toString(),
      status: 'ongoing',
      date: new Date().toISOString(),
    };
    dispatch(addOrderToOngoing(newOrder));
  };

  const renderItem = ({item}) => (
    <View style={{}}>
      {item.items.map((orderItem, index) => (
        <View style={{marginTop: 15}} key={index}>
          <View style={styles.typeContainer}>
            <Text
              style={{
                color: '#181C2E',
                fontFamily: 'Sen-Regular',
                letterSpacing: 0.7,
              }}>
              {orderItem.category}
            </Text>
            {index === 0 && (
              <Text
                style={{
                  color: item.status === 'cancelled' ? '#FF0000' : '#059C6A',
                  fontFamily: 'Sen-Bold',
                }}>
                {item.status}
              </Text>
            )}
          </View>
          <View style={styles.historyContainer}>
            <Image
              source={orderItem.image}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'cover',
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
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text style={styles.text}>$ {orderItem.price}</Text>
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
                <View
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 4,
                    backgroundColor: '#6B6E82',
                  }}
                />
                {item.status === 'cancelled' && (
                  <Text style={{color: '#6B6E82', fontFamily: 'Sen-Regular'}}>
                    {formatDateTime(item.cancelledAt)}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {borderColor: '#FF7622', borderWidth: 1}]}>
          <Text style={[styles.buttonText, {color: '#FF7622'}]}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleReOrder(item)}
          style={[styles.button, {backgroundColor: '#FF7622'}]}>
          <Text style={[styles.buttonText, {color: '#fff'}]}>Re-Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      {orderHistory.length > 0 ? (
        <FlatList
          data={orderHistory}
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
            style={{width: 130, height: 100, resizeMode: 'contain'}}
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
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingBottom: 16,
    borderColor: '#EEF2F6',
    borderBottomWidth: 1,
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

export default OrderHistory;
