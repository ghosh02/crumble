import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import {useNavigation} from '@react-navigation/native';

const searchResult = [
  {
    name: 'Sandwich Bistro',
    resturant: 'Rose garden',
    price: 100,
    image: require('../../assets/image/sandwichimg.png'),
  },
  {
    name: 'Smokin Sandwich',
    resturant: 'Rose garden',
    price: 40,
    image: require('../../assets/image/sandwichimg.png'),
  },
  {
    name: 'Buffalo Sandwich',
    resturant: 'Rose garden',
    price: 60,
    image: require('../../assets/image/sandwichimg.png'),
  },
  {
    name: 'Bullseye Sandwich',
    resturant: 'Rose garden',
    price: 80,
    image: require('../../assets/image/sandwichimg.png'),
  },
];
const SearchResult = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <BackBtn />
          <View
            style={{
              paddingVertical: 16,
              paddingHorizontal: 18,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#ECF0F4',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text
              style={{
                color: '#181C2E',
                fontSize: 10,
                borderRadius: 18,
                fontWeight: 700,
              }}>
              SANDWICH
            </Text>
            <Image source={require('../../assets/image/down.png')} />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View style={styles.cart}>
            <Image source={require('../../assets/image/Search.png')} />
          </View>
          <View style={[styles.cart, {backgroundColor: '#ECF0F4'}]}>
            <Image source={require('../../assets/image/filter.png')} />
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{color: '#32343E', fontSize: 20, marginTop: 24}}>
          Popular Sandwich
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          {searchResult.map((item, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {itemDetails: item})
              }
              key={index}
              style={{
                width: '45%',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center', top: 35, zIndex: 10}}>
                <Image
                  source={item.image}
                  style={{width: 122, height: 84, borderRadius: 10}}
                />
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  paddingHorizontal: 12,
                  paddingTop: 50,
                  paddingBottom: 10,
                  borderRadius: 15,
                }}>
                <Text style={{color: '#32343E', fontWeight: 700, fontSize: 15}}>
                  {item.name}
                </Text>
                <Text style={{color: '#646982', fontSize: 13}}>
                  {item.resturant}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: '#32343E', fontWeight: 700, fontSize: 16}}>
                    $ {item.price}
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#FF7622',
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('../../assets/image/plus.png')} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={{
            color: '#32343E',
            fontSize: 20,
            marginTop: 32,
            marginBottom: 16,
          }}>
          Open Resturants
        </Text>
        <View style={{alignItems: 'center', paddingBottom: 16}}>
          <Image source={require('../../assets/image/openresturant.png')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: '#f6f6f6',
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  cart: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#181C2E',
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

export default SearchResult;
