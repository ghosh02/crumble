import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import OngoingOrders from './OngoingOrders';
import OrderHistory from './OrderHistory';
import BackBtn from '../components/BackBtn';
import {ThreeDotIcon} from '../assets/Icon/IconName';

const MyOrdersScreen = () => {
  const [option, setOption] = useState('Ongoing');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 10,
      }}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
          <BackBtn />
          <Text
            style={{fontSize: 17, fontFamily: 'Sen-Regular', color: '#181C2E'}}>
            My Orders
          </Text>
        </View>
        <View
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ECF0F4',
            borderRadius: 45,
          }}>
          <ThreeDotIcon />
        </View>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            option === 'Ongoing' && styles.toggleButtonSelected,
          ]}
          onPress={() => setOption('Ongoing')}>
          <Text
            style={{
              color: option === 'Ongoing' ? '#FF7622' : '#A5A7B9',
              fontFamily: option === 'Ongoing' ? 'Sen-Bold' : 'Sen-Regular',
            }}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            option === 'History' && styles.toggleButtonSelected,
          ]}
          onPress={() => setOption('History')}>
          <Text
            style={{
              color: option === 'History' ? '#FF7622' : '#A5A7B9',
              fontFamily: option === 'History' ? 'Sen-Bold' : 'Sen-Regular',
            }}>
            History
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 24, flex: 1}}>
        {option === 'Ongoing' ? <OngoingOrders /> : <OrderHistory />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CED7DF',
    marginBottom: 15,
  },
  toggleButton: {
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButtonSelected: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF7622',
  },
});
export default MyOrdersScreen;
