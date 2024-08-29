import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import {CloseIcon} from '../../assets/Icon/IconName';
const FilterPage = ({modalVisible, toggleModal}) => {
  const [selectedOptions, setSelectedOptions] = useState({
    offers: null,
    deliveryTime: null,
    pricing: null,
    rating: 0,
  });

  const handleOptionSelect = (category, option) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [category]: option,
    }));
  };

  const handleRating = rate => {
    setSelectedOptions(prevState => ({
      ...prevState,
      rating: rate, // Update rating in the selectedOptions state
    }));
  };
  const handleFilterPress = () => {
    console.log('Filtered Data:', selectedOptions);
    toggleModal(); // Close the modal after logging the data
  };

  const renderOptionButton = (category, option) => (
    <TouchableOpacity
      style={[
        styles.optionButton,
        selectedOptions[category] === option && styles.optionButtonSelected,
      ]}
      onPress={() => handleOptionSelect(category, option)}>
      <Text
        style={[
          styles.optionText,
          selectedOptions[category] === option && styles.optionTextSelected,
        ]}>
        {option}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <Text style={styles.title}>Filter your search</Text>
            <TouchableOpacity
              onPress={toggleModal}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
                borderRadius: 45,
                backgroundColor: '#ECF0F4',
              }}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          {/* Offers Section */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>OFFERS</Text>
              <View style={styles.row}>
                {renderOptionButton('offers', 'Delivery')}
                {renderOptionButton('offers', 'Pick Up')}
                {renderOptionButton('offers', 'Offer')}
                {renderOptionButton('offers', 'Online payment available')}
              </View>
            </View>

            {/* Delivery Time Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>DELIVER TIME</Text>
              <View style={styles.row}>
                {renderOptionButton('deliveryTime', '10-15 min')}
                {renderOptionButton('deliveryTime', '20 min')}
                {renderOptionButton('deliveryTime', '30 min')}
              </View>
            </View>

            {/* Pricing Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>PRICING</Text>
              <View style={styles.row}>
                {renderOptionButton('pricing', '$')}
                {renderOptionButton('pricing', '$$')}
                {renderOptionButton('pricing', '$$$')}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>RATING</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {[1, 2, 3, 4, 5].map(star => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => handleRating(star)}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 48,
                      borderWidth: 2,
                      borderColor: '#EDEDED',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icons
                      name="star"
                      size={20}
                      color={
                        star <= selectedOptions.rating ? '#FF7622' : '#ccc'
                      }
                      style={styles.star}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={handleFilterPress}>
            <Text style={styles.filterButtonText}>FILTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    height: '85%',
    padding: 20,
    borderRadius: 16,
  },
  title: {
    fontSize: 17,
    color: '#181C2E',
    fontFamily: 'Sen-Medium',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 13,
    color: '#32343E',
    marginBottom: 14,
    fontFamily: 'Sen-Regular',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
    rowGap: 8,
  },
  optionButton: {
    borderWidth: 2,
    borderColor: '#EDEDED',
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 20,
  },
  optionButtonSelected: {
    backgroundColor: '#FF7622',
    borderColor: '#FF7622',
  },

  optionTextSelected: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
  optionText: {
    color: '#464E57',
    fontSize: 16,
    fontFamily: 'Sen-Regular',
  },
  filterButton: {
    backgroundColor: '#FF7622',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  filterButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
});

export default FilterPage;
