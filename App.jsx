import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import CategoryScreen from './src/Screens/CategoryScreen';
import BottomNav from './components/nav';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PermissionsAndroid, Platform} from 'react-native';

async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app needs access to your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
}

const Stack = createStackNavigator();

const AppWrapper = () => {
  const navigation = useNavigation();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const routeName = e?.data?.state?.routes[e?.data?.state?.index]?.name;
      setCurrentRoute(routeName);
      console.log('Current route:', routeName);
    });

    return unsubscribe; 
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.mainContainer}>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            cardStyle: styles.cardStyle
          }} 
          initialRouteName='Login'
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.bottomNavContainer}>
        <BottomNav currentRoute={currentRoute}/>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <AppWrapper />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  cardStyle: {
    backgroundColor: 'transparent',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    elevation: 8, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
});