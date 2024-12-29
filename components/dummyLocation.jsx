import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const DummyLocationSelector = ({onLocationSelect}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('New York, USA');

  // Dummy locations data
  const dummyLocations = [
    { id: '1', name: 'New York, USA' },
    { id: '2', name: 'Los Angeles, USA' },
    { id: '3', name: 'Chicago, USA' },
    { id: '4', name: 'Houston, USA' },
    { id: '5', name: 'Miami, USA' },
    { id: '6', name: 'San Francisco, USA' },
    { id: '7', name: 'Seattle, USA' },
    { id: '8', name: 'Boston, USA' },
    { id: '9', name: 'Las Vegas, USA' },
    { id: '10', name: 'Denver, USA' },
  ];

  // Filter locations based on search query
  const filteredLocations = dummyLocations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


// In DummyLocationSelector:
const handleLocationSelect = (location) => {
  setSelectedLocation(location.name);
  setModalVisible(false);
  onLocationSelect(location.name); // Add this line
};
  return (
    <View>
      {/* Location Display */}
      <TouchableOpacity
        style={styles.locationDisplay}
        onPress={() => setModalVisible(true)}>
        <Image
//           source={require('../../assets/location.png')} // Make sure to have a location icon
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>{selectedLocation}</Text>
        <Image
          source={require('../assets/arrowDown.png')} // Make sure to have an arrow icon
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      {/* Location Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Select Location</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <Image
//                 source={require('../../assets/search.png')} // Make sure to have a search icon
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search location..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#666"
              />
            </View>

            {/* Current Location Button */}
            <TouchableOpacity
              style={styles.currentLocationButton}
              onPress={() => {
                setSelectedLocation('Current Location');
                setModalVisible(false);
              }}>
              <Image
//                 source={require('../../assets/current-location.png')} // Make sure to have a current location icon
                style={styles.currentLocationIcon}
              />
              <Text style={styles.currentLocationText}>Use Current Location</Text>
            </TouchableOpacity>

            {/* Location List */}
            <FlatList
              data={filteredLocations}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.locationItem}
                  onPress={() => handleLocationSelect(item)}>
                  <Image
//                     source={require('../../assets/location-pin.png')} // Make sure to have a pin icon
                    style={styles.locationPinIcon}
                  />
                  <Text style={styles.locationItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  locationDisplay: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    left:-25,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  arrowIcon: {
    top: 5,
    width: 12,
    height: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#333',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  currentLocationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  currentLocationText: {
    fontSize: 16,
    color: '#333',
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  locationPinIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  locationItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DummyLocationSelector;