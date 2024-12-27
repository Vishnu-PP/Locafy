import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';

const ImageCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');
  const pan = useRef(new Animated.Value(0)).current;

  // Sample images array if none provided
  const defaultImages = [
    // require('../assets/Banner.png'),
    'https://picsum.photos/400/200?random=1',
    'https://picsum.photos/400/200?random=2',
    'https://picsum.photos/400/200?random=3',
    ,
  ];

  const imageList = images || defaultImages;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        pan.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > width * 0.2) {
          const newIndex =
            gestureState.dx > 0
              ? Math.max(currentIndex - 1, 0)
              : Math.min(currentIndex + 1, imageList.length - 1);

          setCurrentIndex(newIndex);
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [imageList.length]);

  useEffect(() => {
    Animated.timing(scrollX, {
      toValue: currentIndex * width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, width]);

  const handlePrevPress = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextPress = () => {
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getTranslateX = () => {
    return Animated.add(
      scrollX.interpolate({
        inputRange: [0, width * (imageList.length - 1)],
        outputRange: [0, -width * (imageList.length - 1)],
      }),
      pan,
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.scrollContainer,
          {
            transform: [{translateX: getTranslateX()}],
          },
        ]}
        {...panResponder.panHandlers}>
        {imageList.map((image, index) => (
          <Image
            key={index}
            source={'https://picsum.photos/400/200?random=1'}
            style={[styles.image, {width}]}
            resizeMode="cover"
          />
        ))}
      </Animated.View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, {opacity: currentIndex === 0 ? 0.5 : 1}]}
          onPress={handlePrevPress}
          disabled={currentIndex === 0}>
          <View style={[styles.arrow, styles.leftArrow]} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {opacity: currentIndex === imageList.length - 1 ? 0.5 : 1},
          ]}
          onPress={handleNextPress}
          disabled={currentIndex === imageList.length - 1}>
          <View style={[styles.arrow, styles.rightArrow]} />
        </TouchableOpacity>
      </View>

      <View style={styles.pagination}>
        {imageList.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: currentIndex === index ? '#000' : '#ccc'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Match the parent container's width
    height: '100%', // Match the parent container's height
    overflow: 'hidden',
    justifyContent: 'center', // Center carousel content vertically
    alignItems: 'center', // Center carousel content horizontally
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  image: {
    height: '100%', // Scale the image to the container's height
    width: '100%', // Scale the image to the container's width
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    width: '100%',
    paddingHorizontal: 10,
    transform: [{translateY: -15}],
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 10,
    height: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000',
  },
  leftArrow: {
    transform: [{rotate: '-135deg'}],
  },
  rightArrow: {
    transform: [{rotate: '45deg'}],
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default ImageCarousel;
