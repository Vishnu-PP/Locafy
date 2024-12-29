import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { MaterialIcons } from '@expo/vector-icons'; // If using Expo
// If not using Expo, import your preferred location icon

const LocationSelector = () => {
  const [currentLocation, setCurrentLocation] = useState('Loading...');
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBBKd_exzaVnxzP9SGYnXoSfYUXxHK8t00`
          );
          const data = await response.json();
          if (data.results[0]) {
            setCurrentLocation(data.results[0].formatted_address);
          }
        } catch (error) {
          console.error('Error getting location:', error);
          setCurrentLocation('Location unavailable');
        }
      },
      (error) => {
        console.error(error);
        setCurrentLocation('Location unavailable');
      }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.locationBar}
        onPress={() => setShowLocationPicker(!showLocationPicker)}
      >
{/*         <MaterialIcons name="location-on" size={24} color="#666" /> */}
        <Text style={styles.locationText}>
          {currentLocation}
        </Text>
{/*         <MaterialIcons */}
{/*           name={showLocationPicker ? "keyboard-arrow-up" : "keyboard-arrow-down"} */}
{/*           size={24} */}
{/*           color="#666" */}
{/*         /> */}
      </TouchableOpacity>

      {showLocationPicker && (
        <View style={styles.searchContainer}>
          <GooglePlacesAutocomplete
            placeholder='Search for a location'
            onPress={(data, details = null) => {
              setCurrentLocation(data.description);
              setShowLocationPicker(false);
            }}
            query={{
              key: 'AIzaSyBBKd_exzaVnxzP9SGYnXoSfYUXxHK8t00',
              language: 'en',
            }}
            styles={{
              container: styles.autocompleteContainer,
              textInput: styles.searchInput,
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 1,
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationText: {
    // flex: 1,
    fontSize: 16,
    color: '#333',
    // marginHorizontal: 8,
  },
  searchContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 2,
  },
  autocompleteContainer: {
    marginHorizontal: 16,
  },
  searchInput: {
    height: 48,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default LocationSelector;