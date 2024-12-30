// // import { NavigationContainer, useNavigation } from "@react-navigation/native"
// // import { Button, Text, View } from "react-native"

// // function LoginScreen(){
// //     const navigation = useNavigation();
// //     return(
// //         <View>
// //             <Text>Login Screen</Text>
// //             <Button title="Login" onPress={() =>  navigation.navigate('Home')}/>
// //         </View>
// //     )
// // }
// // export default LoginScreen

// import { useNavigation } from '@react-navigation/native';
// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// const LoginScreen = () => {
//   const onPressLogin = () => {
//     // Do something about login operation
//   };
//   const onPressForgotPassword = () => {
//     // Do something about forgot password operation
//   };
//   const onPressSignUp = () => {
//     // Do something about signup operation
//   };
//   const [state, setState] = useState({
//     name: '',
//     phone: '',
//   });

//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}> Locafy</Text>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Name"
//           placeholderTextColor="#003f5c"
//           onChangeText={text => setState({name: text})}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           secureTextEntry
//           placeholder="Phone"
//           placeholderTextColor="#003f5c"
//           onChangeText={text => setState({phone: text})}
//         />
//       </View>

//       <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.loginBtn}>
//         <Text style={styles.loginText}>Generate Otp</Text>
//       </TouchableOpacity>
//       {/* <TouchableOpacity onPress={onPressSignUp}>
//         <Text style={styles.forgotAndSignUpText}>Signup</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4FD3DA',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 50,
//     color: '#fb5b5a',
//     marginBottom: 40,
//   },
//   inputView: {
//     width: '80%',
//     backgroundColor: '#3AB4BA',
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   inputText: {
//     height: 50,
//     color: 'white',
//   },
//   forgotAndSignUpText: {
//     color: 'white',
//     fontSize: 11,
//   },
//   loginBtn: {
//     width: '80%',
//     backgroundColor: '#fb5b5a',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     marginBottom: 10,
//   },
// });
// export default LoginScreen;
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Image Grid */}
      {/* <View style={styles.imageGrid}>
        <View style={styles.imageRow}>
          <Image
            source={require('../../assets/mappin.png')}
            style={styles.gridImage1}
          />
          <Image
            source={require('../../assets/shopping.png')}
            style={styles.gridImage}
          />
        </View>
        <View style={styles.imageRow}>
          <Image
            source={require('../../assets/mall.png')}
            style={styles.gridImage}
          />
          <Image
            source={require('../../assets/mob.png')}
            style={styles.gridImag4}
          />
        </View>
      </View> */}
      <Image
        source={require('../../assets/Grp.png')}
        style={styles.gridImage}
      />

      {/* Text Content */}
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>
        Set out on an effortless journey to find products near you!
      </Text>

      {/* Sign Up Buttons */}
      <TouchableOpacity
        style={[styles.button, styles.googleButton]}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/google.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.emailButton]}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/mail.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonText}>Sign up with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.numberButton]}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/phone.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonText}>Sign up with Number</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imageGrid: {
    marginTop: 40,
    marginBottom: 40,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridImage: {
    width: 345,
    height: 345.17,
    left: 20,
    top:50,
    marginBottom: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  emailButton: {
    backgroundColor: '#E8F3F1',
  },
  numberButton: {
    backgroundColor: '#E8F3F1',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#333',
    fontWeight: '600',
  },
});

export default LoginScreen;
