import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import {useDispatch} from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from '../../store/cartSlice';
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sizes = ['14"', '16"', '18"'];
  const {itemDetails} = route.params;
  const middleIndex = Math.floor(sizes.length / 2);
  const [selectedSize, setSelectedSize] = useState(sizes[middleIndex]); // Automatically select the middle size
  const [quantity, setQuantity] = useState(1);
  const handleSizeClick = size => {
    setSelectedSize(size);
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    const item = {
      id: itemDetails.name,
      name: itemDetails.name,
      price: itemDetails.price,
      size: selectedSize,
      quantity: quantity,
      image: itemDetails.image,
    };
    dispatch(addItemToCart(item));
    navigation.navigate('CartScreen');
    console.log(item);
  };
  return (
    <View style={styles.container}>
      <Image
        source={itemDetails.image}
        style={{width: '100%', height: 340, objectFit: 'cover'}}
      />
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <BackBtn />
        <Text style={{color: '#fff', fontSize: 17}}>Details</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}>
        <View
          style={{
            width: 200,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
            marginBottom: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#E9E9E9',
          }}>
          <Image
            source={require('../../assets/image/cheaf.png')}
            style={{width: 21, height: 21, objectFit: 'contain'}}
          />
          <Text style={{color: '#181C2E'}}>CRUMBLE</Text>
        </View>
        <Text style={{color: '#181C2E', fontWeight: 700, fontSize: 20}}>
          {itemDetails.name}
        </Text>
        <Text
          style={{
            width: '90%',
            fontSize: 14,
            color: '#A0A5BA',
            lineHeight: 20,
            marginTop: 7,
          }}>
          Sandwich Bistro variety that is topped with tomato sauce.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 36,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              source={require('../../assets/image/Star1.png')}
              style={{width: 20, height: 20, objectFit: 'contain'}}
            />
            <Text style={{color: '#181C2E', fontSize: 16, fontWeight: 700}}>
              4.7
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              source={require('../../assets/image/Delivery.png')}
              style={{width: 20, height: 20, objectFit: 'contain'}}
            />
            <Text style={{color: '#181C2E', fontSize: 14, fontWeight: 400}}>
              Free
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              source={require('../../assets/image/Clock.png')}
              style={{width: 20, height: 20, objectFit: 'contain'}}
            />
            <Text style={{color: '#181C2E', fontSize: 14, fontWeight: 400}}>
              20 min
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            marginTop: 26,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              color: '#32343E',
              fontSize: 13,
              fontWeight: 600,
            }}>
            SIZE :{' '}
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            {sizes.map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSizeButton,
                ]}
                onPress={() => handleSizeClick(size)}>
                <Text
                  style={[
                    styles.sizeButtonText,
                    selectedSize === size && styles.selectedSizeButtonText,
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
          backgroundColor: '#F0F5FA',
          height: 170,
          width: '100%',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingHorizontal: 24,
          paddingVertical: 20,
        }}>
        <View style={styles.priceQuantity}>
          <Text style={styles.price}>${itemDetails.price * quantity}</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              style={styles.quantityButtonContainer}
              onPress={handleDecrease}>
              <Image source={require('../../assets/image/minus.png')} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButtonContainer}
              onPress={handleIncrease}>
              <Image source={require('../../assets/image/plus.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleAddToCart}
          style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#F0F5FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSizeButton: {
    backgroundColor: '#ff7f00',
  },
  sizeButtonText: {
    fontSize: 16,
    color: '#121223',
  },
  selectedSizeButtonText: {
    fontWeight: 700,
    color: '#fff',
  },
  priceQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    fontWeight: 700,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181C2E',
  },
  quantityButtonContainer: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#41414F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityControl: {
    width: 125,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#121223',
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  quantityButton: {
    fontSize: 20,

    color: '#fff',
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,

    color: '#fff',
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
    fontWeight: 'bold',
  },
});

export default Details;
