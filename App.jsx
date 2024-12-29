import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import CategoryScreen from './src/Screens/CategoryScreen';
import BottomNav from './components/nav';
import {View} from 'react-native';
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

// const App = () => {
//   const Stack = createStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Login"
//         screenOptions={{
//           header: props => <BottomNav />,
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Dashboard'}}
//         />
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{title: 'Login'}}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{title: 'Profile'}}
//         />
//         <Stack.Screen
//           name="Category"
//           component={CategoryScreen}
//           options={{title: 'Category'}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

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
  console.log(currentRoute,"cc")
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingBottom: 100}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <BottomNav currentRoute={currentRoute}/>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  useEffect(() => {
    requestLocationPermission();
  },[])
  return (
    <NavigationContainer>
      <AppWrapper />
    </NavigationContainer>
  );
}
