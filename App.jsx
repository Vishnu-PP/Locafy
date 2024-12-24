import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
