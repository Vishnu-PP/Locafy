// import React, {useEffect, useState} from 'react';
// import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';

// const SplashScreen = () => {
//   // Start with visible values
//   const opacity = new Animated.Value(1);
//   const scale = new Animated.Value(1);
//   const translateX = new Animated.Value(0);

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     console.log('SplashScreen animation starting');

//     // Fade in and scale up animation
//     const fadeInScale = Animated.parallel([
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scale, {
//         toValue: 1,
//         friction: 8,
//         tension: 40,
//         useNativeDriver: true,
//       }),
//     ]);

//     // Progress bar animation
//     const progressAnimation = Animated.loop(
//       Animated.sequence([
//         Animated.timing(translateX, {
//           toValue: 150, // Adjusted to be less than container width
//           duration: 1500,
//           useNativeDriver: true,
//         }),
//         Animated.timing(translateX, {
//           toValue: -50, // Start slightly off-screen
//           duration: 0,
//           useNativeDriver: true,
//         }),
//       ]),
//     );

//     // Start animations
//     fadeInScale.start();
//     progressAnimation.start();

//     // Cleanup
//     return () => {
//       fadeInScale.stop();
//       progressAnimation.stop();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.content,
//           {
//             opacity,
//             transform: [{scale}],
//           },
//         ]}>
//         <View style={styles.logoContainer}>
//           <Text style={styles.logo}>🚀</Text>
//         </View>
//         <Text style={styles.title}>Locafy</Text>
//         <View style={styles.loadingBar}>
//           <Animated.View
//             style={[
//               styles.loadingProgress,
//               {
//                 transform: [{translateX}],
//               },
//             ]}
//           />
//         </View>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4299e1',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     alignItems: 'center',
//     width: '100%', // Added width
//     position: 'relative', // Added position
//   },
//   logoContainer: {
//     marginBottom: 20,
//     backgroundColor: 'transparent', // Added background
//   },
//   logo: {
//     fontSize: 80,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   loadingBar: {
//     width: 200,
//     height: 4,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     borderRadius: 2,
//     overflow: 'hidden',
//   },
//   loadingProgress: {
//     width: 50,
//     height: '100%',
//     backgroundColor: 'white',
//     borderRadius: 2,
//   },
// });

// export default SplashScreen;

import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet, Platform, Image} from 'react-native';

const SplashScreen = () => {
  // Use refs to store animation values
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const translateXAnim = useRef(new Animated.Value(-50)).current;

  // Store animation references for cleanup
  const progressAnimationRef = useRef(null);

  useEffect(() => {
    startAnimations();

    // Cleanup function
    return () => {
      // Stop any running animations
      opacityAnim.stopAnimation();
      scaleAnim.stopAnimation();
      translateXAnim.stopAnimation();
      if (progressAnimationRef.current) {
        progressAnimationRef.current.stop();
      }
    };
  }, []);

  const startAnimations = () => {
    // Initial animations
    const initialAnimations = Animated.parallel([
      // Fade in
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Scale up
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]);

    initialAnimations.start(() => {
      // Start progress bar animation after initial animations
      startProgressAnimation();
    });
  };

  const startProgressAnimation = () => {
    // Progress bar animation
    progressAnimationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(translateXAnim, {
          toValue: 150,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(translateXAnim, {
          toValue: -50,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    );

    progressAnimationRef.current.start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: opacityAnim,
            transform: [{scale: scaleAnim}],
          },
        ]}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Locafy</Text>
        </View>

        <View style={styles.loadingBar}>
          <Animated.View
            style={[
              styles.loadingProgress,
              {
                transform: [{translateX: translateXAnim}],
              },
            ]}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  logoContainer: {
    // marginBottom: 20,
    right: 20,
    width:226,
    height:121.2,
    backgroundColor: 'transparent',
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Vertically align items
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36.36,
    fontWeight: '650',
    color: '#3D405B',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  loadingBar: {
    width: 200,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  loadingProgress: {
    width: 50,
    height: '100%',
    backgroundColor: '#F47A65',
    borderRadius: 2,
  },
});

export default SplashScreen;
