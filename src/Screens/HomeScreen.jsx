import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ImageCarousel from '../../components/carousel';
import {useNavigation} from '@react-navigation/native';
import BottomNav from '../../components/nav';

const HomeScreen = () => {
  const navigation = useNavigation();
  const logos = [
    require('../../assets/hacker_9052116.png'),
    require('../../assets/hacker_9052116.png'),
    require('../../assets/hacker_9052116.png'),
    require('../../assets/hacker_9052116.png'),
  ];

  const products = [
    {id: 1, image: require('../../assets/shop1.png')},
    {id: 2, image: require('../../assets/shop2.png')},
    {id: 3, image: require('../../assets/shop3.png')},
    {id: 4, image: require('../../assets/shop4.png')},
    {id: 5, image: require('../../assets/shop5.png')},
  ];

  const shops = [
    {
      id: 1,
      name: 'Shop One',
      image: require('../../assets/hacker_9052116.png'),
      rating: '4.5',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Shop Two',
      image: require('../../assets/hacker_9052116.png'),
      rating: '4.8',
      category: 'Fashion',
    },
    {
      id: 3,
      name: 'Shop Three',
      image: require('../../assets/hacker_9052116.png'),
      rating: '4.2',
      category: 'Groceries',
    },
    {
      id: 4,
      name: 'Shop Four',
      image: require('../../assets/hacker_9052116.png'),
      rating: '4.6',
      category: 'Electronics',
    },
  ];

  const renderShopItem = ({item}) => (
    <TouchableOpacity
      style={styles.shopItem}
      // onPress={() => handleShopPress(item.id)}
    >
      <Image source={item.image} style={styles.shopImage} />
    </TouchableOpacity>
  );
  let homeIcon = {...styles.iconWrap, ...styles.homeIconWrap};
  let homeIcon2 = {...styles.navIcon, ...styles.homeIcon};

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
        </View>
        <View style={styles.headerIconsWrap}>
          <TouchableOpacity
            style={styles.headerIcon}
            // onPress={handleNotificationPress}
            activeOpacity={0.7}>
            <Image
              source={require('../../assets/notify.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.7}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Image
            source={require('../../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search Products" style={styles.searchInput} />
        </View>
        <View style={styles.filterButtonContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('../../assets/filter.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.shopListContainer}>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderShopItem}
          style={styles.shopList}
        />
      </View>
      {/* Mega Sale Banner */}

      {/* <View style={styles.megaSaleBanner}>
        <Text style={styles.megaSaleText}>Mega Sale</Text>
      </View> */}

      <View style={styles.megaSaleBanner}>
        <ImageCarousel />
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.productCard}
            // onPress={() => handleProductPress(item.id)}
            activeOpacity={0.7}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={1}>
                {item.name}
              </Text>
              <View style={styles.productDetails}>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.ratingContainer}>
                  <Image
                    source={require('../../assets/notify.png')}
                    style={styles.ratingIcon}
                  />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        // contentContainerStyle={styles.productGrid}
      />

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.bottomNavBar}>
        <TouchableOpacity style={homeIcon}>
          <Image source={require('../../assets/Home.png')} style={homeIcon2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrap}>
          <Image
            source={require('../../assets/category.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrap}>
          <Image
            source={require('../../assets/fav.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrap} onPress={() => {}}>
          <Image
            source={require('../../assets/Frame.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View> */}
      {/* <BottomNav/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  homeIconWrap: {
    backgroundColor: '#FF6F61',
  },
  iconWrap: {
    width: 65,
    height: 65,
    backgroundColor: '#90CAAE',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: 362,
    height: 55.97,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    // marginHorizontal: 10,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
    color: '#888',
  },
  headerIconsWrap: {
    width: 92,
    height: 40,
    flexDirection: 'row',
    marginRight: 10,
    gap: 12,
  },
  icon: {
    width: 15, // Specify the width of the image
    height: 15, // Specify the height of the image
    resizeMode: 'cover',
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',
    padding: 15.71,
    borderWidth: 1.27,
    borderColor: '#3D405BBF',
    width: 40,
    height: 40,
    gap: 9.82,
    borderRadius: 31.86,
    // marginRight: 10,
  },
  searchBar: {
    width: 290,
    height:55.97,
    borderWidth: 1.08,
    borderColor: '#81B29A',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#81B29A1A',
    borderRadius: 30,
    padding: 10,
  },
  searchIcon: {
    width: 21.53,
    height: 21.53,
    paddingTop: 1.79,
    paddingRight: 1.56,
    paddingBottom: 1.15,
    paddingLeft: 1.79,
  },
  searchInput: {
    flex: 1,
    height:55
  },
  filterButtonContainer: {
    // position: 'absolute',
    // right: 20,
    // top: 20,
    // zIndex: 1,
  },
  filterButton: {
    backgroundColor: '#FF6F61',
    padding: 10,
    borderRadius: 8,
    width: 55.97,
    height: 55.97,
    padding: 17.22,
    gap: 10.76,
    borderRadius: 34.92,
    opacity: 1,
  },
  logoCarousel: {
    width: 362,
    height: 60,
    // marginVertical: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5F5F5',
  },
  megaSaleBanner: {
    width: 362,
    height: 151,
    marginHorizontal: 20,
    // backgroundColor: '#FFD1C1',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    marginVertical: 20,
  },
  megaSaleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  bottomNavBar: {
    gap: 8,
    width: 300,
    height: 81,
    padding: 8,
    position: 'absolute', // Makes it float over the screen
    bottom: 20, // Distance from the bottom of the screen
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#81B29A',
    borderRadius: 70.62, // Rounded corners
    elevation: 5, // For Android shadow effect
    shadowColor: '#000', // For iOS shadow effect
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  navIcon: {
    width: 29.25, // Specify the width of the image
    height: 29.25, // Specify the height of the image
    resizeMode: 'cover',
  },
  homeIcon: {
    width: 19, // Specify the width of the image
    height: 20, // Specify the height of the image
    resizeMode: 'cover',
  },
  shopListContainer: {
    // marginVertical: 10,
    width: 362,
    height: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  shopList: {
    paddingHorizontal: 15,
  },
  shopItem: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 3,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  shopImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default HomeScreen;
