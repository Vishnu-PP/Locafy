import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const BottomNav = ({ currentRoute = 'Home', onRouteChange }) => {
  let homeIcon = {...styles.iconWrap, ...styles.homeIconWrap};
  let homeIcon2 = {...styles.navIcon, ...styles.homeIcon};
  let navPages = ['Home', 'Category', 'Shops',"Favourite"];

  return (
    navPages.includes(currentRoute) && (
      <View style={styles.container}>
        <View style={styles.bottomNavBar}>
          <TouchableOpacity
            style={currentRoute === 'Home' ? homeIcon : styles.iconWrap}
            onPress={() => onRouteChange('Home')}>
            <Image source={require('../assets/Home.png')} style={homeIcon2} />
          </TouchableOpacity>

          <TouchableOpacity
            style={currentRoute === 'Category' ? homeIcon : styles.iconWrap}
            onPress={() => onRouteChange('Category')}>
            <Image
              source={require('../assets/category.png')}
              style={styles.navIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={currentRoute === 'Favourite' ? homeIcon : styles.iconWrap}
            onPress={() => onRouteChange('Favourite')}>
            <Image
              source={require('../assets/fav.png')}
              style={styles.navIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={currentRoute === 'Shops' ? homeIcon : styles.iconWrap}
            onPress={() => onRouteChange('Shops')}>
            <Image
              source={require('../assets/storess.png')}
              style={styles.navIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 30, // Adjust this value to control how high it floats
    alignItems: 'center',
    zIndex: 999,
  },
  bottomNavBar: {
    gap: 8,
    width: 300,
    height: 81,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#81B29A',
    borderRadius: 70.62,
    // Enhanced shadow for floating effect
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  homeIconWrap: {
    backgroundColor: '#FF6F61',
  },
  iconWrap: {
    width: 65,
    height: 65,
    backgroundColor: '#90CAAE',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 29.25,
    height: 29.25,
    resizeMode: 'cover',
  },
  homeIcon: {
    width: 19,
    height: 20,
    resizeMode: 'cover',
  },
});

export default BottomNav;