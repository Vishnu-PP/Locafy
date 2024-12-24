// import { NavigationContainer, useNavigation } from "@react-navigation/native"
// import { Button, Text, View } from "react-native"

// function LoginScreen(){
//     const navigation = useNavigation();
//     return(
//         <View>
//             <Text>Login Screen</Text>
//             <Button title="Login" onPress={() =>  navigation.navigate('Home')}/>
//         </View>
//     )
// }
// export default LoginScreen

import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const LoginScreen = () => {
  const onPressLogin = () => {
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };
  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Locafy</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({name: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({phone: text})}
        />
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.loginBtn}>
        <Text style={styles.loginText}>Generate Otp</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
export default LoginScreen;
