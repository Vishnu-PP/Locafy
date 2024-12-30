import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import DummyLocationSelector from '../../components/dummyLocation';
import {useNavigation} from '@react-navigation/native';
import Home from './home';
import BottomNav from '../../components/nav';
import CategoryScreen from './CategoryScreen';
import ShopsScreen from './ShopsScreen';
import FavScreen from './FavScreen';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Palazhi, Calicut');
  const [currentView, setCurrentView] = useState('Home');

  let products = [
    {
      id: 1,
      price: 899,
      category: 'Electronics',
      name: 'Boat Nirvana Wireless Headphones',
      image: require('../../assets/phone.png'),
      shop: [
        {
          id: 1,
          address: '2nd Floor, Hilite Mall, Palazhi, Calicut',
          name: 'Tata Chroma',
          image: require('../../assets/shop1.png'),
          distance: '0.5 km',
          location: 'Palazhi, Calicut',
          rating: '4.5',
        },
        {
          id: 2,
          address: 'Palazhi, Calicut',
          name: 'Tech Store',
          image: require('../../assets/shop2.png'),
          distance: '1.2 km',
          location: 'Palazhi, Calicut',
          rating: '4.8',
        },
      ],
    },
    {
      id: 2,
      category: 'Electronics',
      price: 999,
      name: 'Smart Watch',
      image: require('../../assets/smw.webp'),
      shop: [
        {
          id: 3,
          address: 'Bismi Nadakkavu, Calicut',
          name: 'Bismi',
          image: require('../../assets/shop3.png'),
          distance: '2.1 km',
          location: 'Nadakkavu, Calicut',
          rating: '4.2',
        },
      ],
    },
    {
      id: 3,
      category: 'Electronics',
      price: 129900,
      name: 'Laptop',
      image: require('../../assets/laptop.webp'),
      shop: [
        {
          id: 4,
          address: 'Palazhi, Calicut',
          name: 'Tech Store',
          image: require('../../assets/shop2.png'),
          distance: '1.2 km',
          location: 'Palazhi, Calicut',
          rating: '4.8',
        },
      ],
    },
    {
      id: 4,
      category: 'Electronics',
      name: 'Phone',
      price: 29900,
      image: require('../../assets/phone.png'),
      shop: [
        {
          id: 5,
          address: 'Bismi Nadakkavu, Calicut',
          name: 'Bismi',
          image: require('../../assets/shop3.png'),
          distance: '2.1 km',
          location: 'Nadakkavu, Calicut',
          rating: '4.2',
        },
      ],
    },
    {
      id: 5,
      category: 'Electronics',
      name: 'Tablet',
      price: 19900,
      image: require('../../assets/tablet.webp'),
      shop: [
        {
          id: 6,
          address: 'Palazhi, Calicut',
          name: 'Tech Store',
          image: require('../../assets/shop2.png'),
          distance: '1.2 km',
          location: 'Palazhi, Calicut',
          rating: '4.8',
        },
      ],
    },
    {
      id: 6,
      category: 'Food',
      name: 'Lays',
      price: 20,
      image: require('../../assets/food.png'),
      shop: [
        {
          id: 7,
          address: 'Bismi Nadakkavu, Calicut',
          name: 'Bismi',
          image: require('../../assets/shop3.png'),
          distance: '2.1 km',
          location: 'Nadakkavu, Calicut',
          rating: '4.2',
        },
      ],
    },
    {
      id: 7,
      category: 'Food',
      name: 'Chips',
      price: 20,
      image: require('../../assets/food.png'),
      shop: [
        {
          id: 8,
          address: 'Palazhi, Calicut',
          name: 'Tech Store',
          image: require('../../assets/shop2.png'),
          distance: '1.2 km',
          location: 'Palazhi, Calicut',
          rating: '4.8',
        },
      ],
    },
  ];

  const getFilteredResults = () => {
    let results = [];

    products.forEach(product => {
      if (
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        product.shop
          .filter(shop => shop.location === selectedLocation)
          .forEach(shop => {
            results.push({
              productPrice: product.price,
              productId: product.id,
              productName: product.name,
              productImage: product.image,
              shopId: shop.id,
              shopName: shop.name,
              shopAddress: shop.address,
              shopImage: shop.image,
              distance: shop.distance,
              rating: shop.rating,
            });
          });
      }
    });

    return results.sort(
      (a, b) => parseFloat(a.distance) - parseFloat(b.distance),
    );
  };

  const handleSearch = text => {
    setSearchQuery(text);
    setShowResults(true);
  };

  const renderProductWithShop = ({item}) => (
    <TouchableOpacity style={styles.productShopCard}>
      <View style={styles.container}>
        {/* Left side - Product Image */}
        <Image source={item.productImage} style={styles.productImage} />

        {/* Right side - Product Details */}
        <View style={styles.detailsContainer}>
          {/* Name and Price Row */}
          <View style={styles.productHeader}>
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.productPrice}>{item.productPrice} Rs</Text>
          </View>

          {/* Shop Info */}
          <View style={styles.shopInfo}>
            <Text style={styles.shopName}>{item.shopName}</Text>
            <Text style={styles.shopAddress}>{item.shopAddress}</Text>
          </View>

          {/* Distance/Rating */}
          <View style={styles.ratingContainer}>
            <Image
              source={require('../../assets/placeholder.png')}
              style={styles.ratingIcon}
            />
            <Text style={styles.ratingText}>{item.distance}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'Home':
        return <Home />;
      case 'Category':
        return <CategoryScreen />;
      case 'Favourite':
        return <FavScreen />;
      case 'Shops':
        return <ShopsScreen />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <DummyLocationSelector
              onLocationSelect={location => setSelectedLocation(location)}
            />
          </View>
          <View style={styles.headerIconsWrap}>
            <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
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

        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <Image
              source={require('../../assets/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search Products"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            {searchQuery && (
              <Text
                onPress={() => {
                  setSearchQuery('');
                  setShowResults(false);
                }}
                style={styles.closeButtonText}>
                ✕
              </Text>
            )}
          </View>
          <View style={styles.filterButtonContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Image source={require('../../assets/filter.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {showResults ? (
          <View style={styles.resultsContainer}>
            <FlatList
              data={getFilteredResults()}
              renderItem={renderProductWithShop}
              keyExtractor={item => `${item.productId}-${item.shopId}`}
              scrollEnabled={false}
              ListEmptyComponent={
                <Text style={styles.noResultsText}>
                  No products found in nearby stores
                </Text>
              }
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        ) : (
          renderContent()
        )}
      </ScrollView>
      <BottomNav currentRoute={currentView} onRouteChange={setCurrentView} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your existing container, header, search bar styles ...
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 110,
    flexGrow: 1,
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
  headerIconsWrap: {
    width: 92,
    height: 40,
    flexDirection: 'row',
    marginRight: 10,
    gap: 12,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15.71,
    borderWidth: 1.27,
    borderColor: '#3D405BBF',
    width: 40,
    height: 40,
    gap: 9.82,
    borderRadius: 31.86,
  },
  searchBarContainer: {
    width: 362,
    height: 55.97,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchBar: {
    width: 290,
    height: 55.97,
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
    height: 55,
  },
  closeButtonText: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: '100',
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#FF6F61',
    padding: 17.22,
    width: 55.97,
    height: 55.97,
    borderRadius: 34.92,
    opacity: 1,
  },
  resultsContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    marginTop: 0,
  },
  productContainer: {
    marginBottom: 20,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  productImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeResultItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  storeResultImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '500',
  },
  storeAddress: {
    fontSize: 12,
    fontWeight: '200',
  },
  storeDistance: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  storeRating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
    borderRadius: 15,
  },
  ratingIcon: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  noResultsText: {
    textAlign: 'center',
    color: '#666',
    padding: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  resultsContainer: {
    padding: 15,
    height: 600,
    // backgroundColor: '#000',
    borderRadius: 10,
    margin: 10,
    marginTop: 0,
  },
  productShopCard: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  productSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  shopSection: {
    // flexDirection: 'row',
    alignItems: 'start',
  },
  shopImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  shopInfo: {
    flex: 1,
  },
  shopName: {
    fontSize: 14,
    fontWeight: '500',
  },
  shopAddress: {
    fontSize: 12,
    color: '#666',
  },
  distance: {
    fontSize: 12,
    color: '#81B29A',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
    borderRadius: 15,
  },
  ratingIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
  noResultsText: {
    textAlign: 'center',
    color: '#666',
    padding: 20,
  },
  productShopCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E8B57',
  },
  shopInfo: {
    marginBottom: 8,
  },
  shopName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  shopAddress: {
    fontSize: 12,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;
