// src/screens/AddCardScreen.js
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addCard} from '../../store/cardSlice';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CloseIcon} from '../../assets/Icon/IconName';

const AddCardScreen = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddCard = () => {
    const newCard = {
      id: Date.now().toString(),
      cardHolderName,
      cardNumber,
      expiryDate,
      cvc,
    };
    dispatch(addCard(newCard));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Card</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.inputLabel}> CARD HOLDER NAME</Text>
        <TextInput
          value={cardHolderName}
          onChangeText={setCardHolderName}
          style={styles.inputField}
        />
        <Text style={styles.inputLabel}> CARD NUMBER</Text>
        <TextInput
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
          maxLength={16}
          style={styles.inputField}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '40%'}}>
            <Text style={styles.inputLabel}> EXPIRY DATE</Text>
            <TextInput
              keyboardType="numeric"
              value={expiryDate}
              maxLength={4}
              onChangeText={setExpiryDate}
              style={[styles.inputField, {}]}
            />
          </View>
          <View style={{width: '40%'}}>
            <Text style={styles.inputLabel}> CVC</Text>
            <TextInput
              keyboardType="numeric"
              value={cvc}
              onChangeText={setCvc}
              maxLength={3}
              secureTextEntry={true}
              style={[styles.inputField, {width: '100%'}]}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={handleAddCard} style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>ADD & MAKE PAYMENT </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  closeIcon: {
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECF0F4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  headerText: {color: '#181C2E', fontSize: 17, fontFamily: 'Sen-Medium'},
  inputLabel: {color: '#A0A5BA', marginVertical: 10, fontFamily: 'Sen-Regular'},
  inputField: {
    paddingVertical: 20,
    paddingHorizontal: 22,
    backgroundColor: '#F0F5FA',
    color: '#32343E',
    borderRadius: 12,
    fontSize: 16,
    letterSpacing: 1,
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
export default AddCardScreen;
