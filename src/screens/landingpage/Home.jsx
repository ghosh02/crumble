import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Cart from '../../components/Cart';

const Home = () => {
  const navigation = useNavigation();
  const fooditems = [
    {name: 'Breakfast', image: require('../../assets/image/breakfast.png')},
    {name: 'Pastries', image: require('../../assets/image/cake.png')},
    {name: 'Sweet', image: require('../../assets/image/sweet.png')},
    {name: 'Dessert', image: require('../../assets/image/Desserts.png')},
    {name: 'Drinks', image: require('../../assets/image/drink.png')},
  ];
  const cakeitems = [
    {name: 'Donuts', image: require('../../assets/image/donuts.png')},
    {name: 'Candles', image: require('../../assets/image/candel.png')},
    {name: 'Flowers', image: require('../../assets/image/flower.png')},
    {name: 'Others', image: require('../../assets/image/others.png')},
  ];
  const items2 = [
    {
      name: 'Brick coffee',
      image: require('../../assets/image/brickcoffee.png'),
    },
    {
      name: 'Brick coffee',
      image: require('../../assets/image/brickcoffee.png'),
    },
    {
      name: 'Brick coffee',
      image: require('../../assets/image/brickcoffee.png'),
    },
  ];
  const items = [
    {name: 'Quasa', image: require('../../assets/image/quasa.png')},
    {name: 'Quasa', image: require('../../assets/image/quasa.png')},
    {name: 'Quasa', image: require('../../assets/image/quasa.png')},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <View style={styles.bellicon}>
            <Image source={require('../../assets/image/bell.png')} />
          </View>
          <View>
            <Text style={{color: '#FF7622', fontSize: 12, fontWeight: 700}}>
              DELIVERED TO
            </Text>
            <Text style={{color: '#676767', fontSize: 12, fontWeight: 400}}>
              KOLKATA
            </Text>
          </View>
        </View>
        <Cart />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 24}}>
          <Text style={{color: '#321B1C', fontSize: 16, fontWeight: 400}}>
            Hey Sudip,{' '}
          </Text>
          <Text style={{color: '#321B1C', fontSize: 16, fontWeight: 700}}>
            Good Afternoon!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={styles.searchContainer}>
          <Image source={require('../../assets/image/Search.png')} />
          <Text style={{color: '#676767'}}>Search snacks, food</Text>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={{
            gap: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{gap: 15, flexDirection: 'row', flexWrap: 'wrap'}}>
          {fooditems.map((item, index) => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#0000000D',
                shadowColor: '#0000000D',
                borderRadius: 10,
                paddingVertical: 7,
                paddingHorizontal: 7,
                elevation: 5,
              }}
              key={index}>
              <View style={styles.fooditem}>
                <Image source={item.image} />
              </View>
              <Text style={{color: '#FA8700', fontSize: 12, fontWeight: 500}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: 700,
            marginVertical: 24,
          }}>
          Special offer
        </Text>
        <View style={{marginBottom: 20, alignItems: 'center', rounded: 10}}>
          <Image source={require('../../assets/image/banner.png')} />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
          <View style={styles.cake}>
            <Text style={{color: '#000', fontSize: 12, fontWeight: 400}}>
              Regular Cake
            </Text>
            <Image source={require('../../assets/image/regularcake.png')} />
          </View>
          <View style={[styles.cake, {width: 135}]}>
            <Text style={{color: '#000', fontSize: 12, fontWeight: 400}}>
              Gifts
            </Text>
            <Image source={require('../../assets/image/gifts.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
          }}>
          {cakeitems.map((item, index) => (
            <TouchableOpacity
              style={{
                width: 70,
                paddingVertical: 7,
                alignItems: 'center',
                backgroundColor: '#0000000D',
                marginTop: 13,
                borderRadius: 10,
                shadowColor: '#0000000D',
                elevation: 5,
              }}
              key={index}>
              <Text style={{color: '#FA8700', fontSize: 12, fontWeight: 400}}>
                {item.name}
              </Text>
              <View style={styles.fooditem}>
                <Image source={item.image} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 700,
              marginVertical: 16,
            }}>
            Discount guaranteed!
          </Text>
          <Image source={require('../../assets/image/arrow-right.png')} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 18,
          }}>
          {items2.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={{width: 192}}>
                <View>
                  <Image
                    source={require('../../assets/image/brickcoffee.png')}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 6,
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                      borderRadius: 30,
                      backgroundColor: '#332C45',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                      4% off your order
                    </Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      right: -6,
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                      borderRadius: 30,
                      backgroundColor: '#332C45',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                      4% off your order
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 600,
                    marginTop: 6,
                  }}>
                  Brick coffee
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={{color: '#78828A', fontWeight: 700}}>
                      1.5 km |
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Image source={require('../../assets/image/Star.png')} />
                      <Text style={{color: '#78828A', fontWeight: 700}}>
                        4.5 (1.2k)
                      </Text>
                    </View>
                  </View>

                  <Image source={require('../../assets/image/heart.png')} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <Image source={require('../../assets/image/bannercard.png')} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#171725',
              fontSize: 20,
              fontWeight: 700,
              marginVertical: 16,
            }}>
            What's delicious around here?
          </Text>
          <Image source={require('../../assets/image/arrow-right.png')} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 18,
          }}>
          {items2.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={{width: 192}}>
                <View>
                  <Image source={require('../../assets/image/quasa.png')} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 6,
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                      borderRadius: 30,
                      backgroundColor: '#332C45',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                      4% off your order
                    </Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      right: -6,
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                      borderRadius: 30,
                      backgroundColor: '#332C45',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                      4% off your order
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 600,
                    marginTop: 6,
                  }}>
                  Quasa
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={{color: '#78828A', fontWeight: 700}}>
                      1.5 km |
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Image source={require('../../assets/image/Star.png')} />
                      <Text style={{color: '#78828A', fontWeight: 700}}>
                        4.5 (1.2k)
                      </Text>
                    </View>
                  </View>

                  <Image source={require('../../assets/image/heart.png')} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 24,
            gap: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View>
            <Image source={require('../../assets/image/cukiernia.png')} />
            <Text style={{fontWeight: 700, color: '#000', fontSize: 16}}>
              Cukiernia soa
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/image/cukiernia.png')} />
            <Text style={{fontWeight: 700, color: '#000', fontSize: 16}}>
              Cukiernia soa
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/image/cukiernia.png')} />
            <Text style={{fontWeight: 700, color: '#000', fontSize: 16}}>
              Cukiernia soa
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#171725',
              fontSize: 20,
              fontWeight: 700,
              marginVertical: 16,
            }}>
            Highlights of March
          </Text>
          <Image source={require('../../assets/image/arrow-right.png')} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 18,
          }}>
          {items2.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={{width: 192}}>
                <View>
                  <Image source={require('../../assets/image/manekin.png')} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 6,
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                      borderRadius: 30,
                      backgroundColor: '#332C45',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                      4% off your order
                    </Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      right: -6,
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                      borderRadius: 30,
                      backgroundColor: '#332C45',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                      4% off your order
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 600,
                    marginTop: 6,
                  }}>
                  Manekin
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={{color: '#78828A', fontWeight: 700}}>
                      1.5 km |
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Image source={require('../../assets/image/Star.png')} />
                      <Text style={{color: '#78828A', fontWeight: 700}}>
                        4.5 (1.2k)
                      </Text>
                    </View>
                  </View>

                  <Image source={require('../../assets/image/heart.png')} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#171725',
              fontSize: 20,
              fontWeight: 700,
              marginVertical: 16,
            }}>
            Nearby Restaurants
          </Text>
          <Image source={require('../../assets/image/arrow-right.png')} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            gap: 30,
          }}>
          {items2.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={{width: 192}}>
                <View>
                  <Image source={require('../../assets/image/resturant.png')} />
                </View>
                <Text
                  style={{
                    color: '#111111',
                    fontSize: 18,
                    fontWeight: 600,
                    marginTop: 6,
                  }}>
                  Elisandra Restaurant
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <Image source={require('../../assets/image/location.png')} />
                  <Text style={{color: '#66707A', fontWeight: 700}}>
                    Elisandra Restaurant
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#171725',
              fontSize: 20,
              fontWeight: 700,
              marginVertical: 16,
            }}>
            Recommended For You
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <View>
            <Image source={require('../../assets/image/hotel1.png')} />
            <View
              style={{
                position: 'absolute',
                top: 6,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 30,
                backgroundColor: '#332C45',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                4% off your order
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: -8,
                right: 0,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 30,
                backgroundColor: '#332C45',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                4% off your order
              </Text>
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 18,
                color: '#212121',
                fontSize: 16,
                fontWeight: 700,
              }}>
              Cedric Grolet Cafe
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={{color: '#78828A', fontWeight: 700}}>
                  1.5 km |
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Image source={require('../../assets/image/Star.png')} />
                  <Text style={{color: '#78828A', fontWeight: 700}}>
                    4.5 (1.2k)
                  </Text>
                </View>
              </View>

              <Image source={require('../../assets/image/heart.png')} />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <View>
            <Image source={require('../../assets/image/hotel2.png')} />
            <View
              style={{
                position: 'absolute',
                top: 6,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 30,
                backgroundColor: '#332C45',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                4% off your order
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: -8,
                right: 0,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 30,
                backgroundColor: '#332C45',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                4% off your order
              </Text>
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 18,
                color: '#212121',
                fontSize: 16,
                fontWeight: 700,
              }}>
              Cedric Grolet Cafe
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={{color: '#78828A', fontWeight: 700}}>
                  1.5 km |
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Image source={require('../../assets/image/Star.png')} />
                  <Text style={{color: '#78828A', fontWeight: 700}}>
                    4.5 (1.2k)
                  </Text>
                </View>
              </View>

              <Image source={require('../../assets/image/heart.png')} />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <View>
            <Image source={require('../../assets/image/hotel3.png')} />
            <View
              style={{
                position: 'absolute',
                top: 6,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 30,
                backgroundColor: '#332C45',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                4% off your order
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: -8,
                right: 0,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 30,
                backgroundColor: '#332C45',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 400}}>
                4% off your order
              </Text>
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 18,
                color: '#212121',
                fontSize: 16,
                fontWeight: 700,
              }}>
              Cedric Grolet Cafe
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={{color: '#78828A', fontWeight: 700}}>
                  1.5 km |
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Image source={require('../../assets/image/Star.png')} />
                  <Text style={{color: '#78828A', fontWeight: 700}}>
                    4.5 (1.2k)
                  </Text>
                </View>
              </View>

              <Image source={require('../../assets/image/heart.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bellicon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#ECF0F4',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  headerItem: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
  },

  searchContainer: {
    marginVertical: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  fooditem: {
    width: 49,
    height: 62,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cake: {
    width: 170,
    height: 101,
    backgroundColor: '#0000000D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0000000d',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Home;
