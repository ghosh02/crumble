import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {addCard} from '../../store/cardSlice';
import {DownIcon, PlusIcon} from '../../assets/Icon/IconName';

const paymentMethods = [
  {
    id: 1,
    name: 'Cash',
    image: require('../../assets/image/Cash.png'),
  },
  {
    id: 2,
    name: ' Card',
    image: require('../../assets/image/visa.png'),
  },
  {
    id: 3,
    name: 'Paypal',
    image: require('../../assets/image/paypal.png'),
  },
  {
    id: 4,
    name: 'Card',
    image: require('../../assets/image/visa.png'),
  },
];
const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(2);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const cartItem = useSelector(state => state.cart.cartItems);
  console.log(cartItem);
  const handleSelectPayment = id => {
    setSelectedPaymentMethod(id);
  };
  const cards = useSelector(state => state.card.cards);
  const navigation = useNavigation();
  const handleOrder = () => {
    if (cards.length > 0) {
      navigation.navigate('PaymentSuccess');
    }
  };
  const renderCard = ({item}) => (
    <View
      style={{
        backgroundColor: '#F4F5F7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 12,
      }}>
      <View style={{gap: 5}}>
        <Text style={{color: '#32343E', fontSize: 16, fontFamily: 'Sen-Bold'}}>
          Master Card
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image source={require('../../assets/image/Mastercard.png')} />
          <Text
            style={{color: '#32343E', fontSize: 16, fontFamily: 'Sen-Regular'}}>
            **** **** **** {item.cardNumber.slice(-4)}
          </Text>
        </View>
      </View>
      <DownIcon />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackBtn />
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <View style={{height: 130, paddingHorizontal: 24}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            justifyContent: 'center',
            marginTop: 32,
          }}>
          {paymentMethods.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectPayment(item.id)}>
              <View
                style={[
                  styles.paymentMethod,
                  selectedPaymentMethod === item.id &&
                    styles.selectedPaymentMethod,
                ]}>
                <Image source={item.image} style={styles.paymentMethodImage} />
              </View>
              <Text style={styles.paymentMethodName}>{item.name}</Text>
              {selectedPaymentMethod === item.id && (
                <View style={styles.checkContainer}>
                  <Image
                    source={require('../../assets/image/check.png')}
                    style={styles.checkImage}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {selectedPaymentMethod === 2 && cards.length === 0 ? (
        <View
          style={{
            flex: 1,

            padding: 24,
          }}>
          <View
            style={{
              width: '100%',
              height: '75%',
              backgroundColor: '#F7F8F9',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
            }}>
            <Image
              source={require('../../assets/image/nocard.png')}
              style={{width: 200, height: 100, objectFit: 'cover'}}
            />
            <Text
              style={{
                color: '#32343E',
                fontSize: 16,
                fontFamily: 'Sen-Bold',
                marginTop: 10,
              }}>
              No Cards Added
            </Text>
            <Text style={styles.title}>
              You can add a card and save it for later
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddCard');
            }}
            style={styles.addCard}>
            <PlusIcon />
            <Text style={styles.addCardText}>ADD NEW</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, padding: 24}}>
          <FlatList
            data={cards}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            ListFooterComponent={() => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddCard');
                }}
                style={styles.addCard}>
                <PlusIcon />
                <Text style={styles.addCardText}>ADD NEW</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <View style={styles.totalContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <Text style={{color: '#A0A5BA', fontFamily: 'Sen-Regular'}}>
            TOTAL:
          </Text>
          <Text
            style={{color: '#181C2E', fontSize: 25, fontFamily: 'Sen-Regular'}}>
            ${totalAmount.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity onPress={handleOrder} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>PAY & CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    // padding: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 17,
    color: '#181C2E',
    fontFamily: 'Sen-Medium',
  },
  paymentMethod: {
    paddingHorizontal: 31,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#F0F5FA',
    shadowColor: '#000',
    elevation: 2,
  },
  paymentMethodImage: {
    // paddingHorizontal: 22,
    width: 40,
    height: 20,
    objectFit: 'contain',
  },
  paymentMethodName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#464E57',
    fontFamily: 'Sen-Regular',
    marginTop: 5,
  },
  selectedPaymentMethod: {
    borderWidth: 2,
    borderColor: '#FF7622',
  },
  checkImage: {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },
  checkContainer: {
    position: 'absolute',
    top: -2,
    right: -8,
    zIndex: 10,
  },
  totalContainer: {
    bottom: 0,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  addToCartButton: {
    backgroundColor: '#ff7f00',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 24,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Sen-Bold',
  },
  title: {
    color: '#2D2D2D',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    width: '70%',
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'Sen-Regular',
  },
  addCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F0F5FA',
    marginTop: 15,
  },
  addCardText: {
    color: '#FF7622',
    fontSize: 14,
    fontFamily: 'Sen-Bold',
  },
});

export default Payment;
