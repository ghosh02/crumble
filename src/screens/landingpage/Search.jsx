import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Cart from '../../components/Cart';
const resturents = [
  {
    name: 'Pansi Restaurant',
    image: require('../../assets/image/resturant1.png'),
    rating: 4.7,
  },
  {
    name: 'American Spicy Burger Shop',
    image: require('../../assets/image/resturant2.png'),
    rating: 4.5,
  },
  {
    name: 'Cafenio Coffee Club',
    image: require('../../assets/image/resturant3.png'),
    rating: 4.3,
  },
];
const fastfood = [
  {image: require('../../assets/image/brickcoffee.png')},
  {image: require('../../assets/image/brickcoffee.png')},
  {image: require('../../assets/image/brickcoffee.png')},
];
const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    if (searchTerm && searchTerm.trim() !== '') {
      const newHistory = [searchTerm, ...searchHistory].slice(0, 10);
      navigation.navigate('SearchResult');
      setSearchHistory(newHistory);
      setSearchTerm(null);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <BackBtn />
          <Text style={{color: '#181C2E', fontSize: 17}}>Search</Text>
        </View>
        <Cart />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.searchContainer}>
            <TouchableOpacity style={{width: '10%'}} onPress={handleSearch}>
              <Image source={require('../../assets/image/Search.png')} />
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 45,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Search..."
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
              {searchTerm !== null ? (
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    backgroundColor: '#CDCDCF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                  }}
                  onPress={() => {
                    setSearchTerm(null);
                  }}>
                  <Image source={require('../../assets/image/close.png')} />
                </TouchableOpacity>
              ) : (
                ''
              )}
            </View>
          </View>
        </View>
        <Text style={{fontSize: 20, color: '#32343E', marginTop: 24}}>
          Recent Keywords
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 10,
            marginTop: 12,
          }}>
          {searchHistory.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderColor: '#EDEDED',
                borderWidth: 2,
                borderRadius: 20,
              }}>
              <Text style={{color: '#181C2E', fontSize: 16}}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text
          style={{
            color: '#32343E',
            fontSize: 20,
            marginTop: 32,
            marginBottom: 20,
          }}>
          Suggested Restaurants
        </Text>
        <View style={{gap: 16}}>
          {resturents.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                borderColor: '#EBEBEB',
                paddingBottom: 10,
                borderBottomWidth: 1,
              }}>
              <Image source={item.image} style={{borderRadius: 8}} />
              <View>
                <Text style={{color: '#32343E', fontSize: 16}}>
                  {item.name}
                </Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Image source={require('../../assets/image/Star1.png')} />
                  <Text style={{color: '#181C2E', fontSize: 16}}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={{fontSize: 20, color: '#181C2E', marginTop: 32}}>
          Popular Fast food
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 35,
            marginVertical: 12,
          }}>
          {fastfood.map((item, index) => (
            <Image key={index} source={item.image} style={{borderRadius: 15}} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: 'white',
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

  searchContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 24,
    // shadowColor: '#000',
    // elevation: 5,
  },
  input: {
    color: '#000',
    width: '82%',
    // height: 40,
  },
});

export default Search;
