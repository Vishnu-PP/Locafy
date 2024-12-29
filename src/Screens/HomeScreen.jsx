// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import ImageCarousel from '../../components/carousel';
// import LocationSelector from '../../components/locationSelector';
// import DummyLocationSelector from '../../components/dummyLocation';
// import {useNavigation} from '@react-navigation/native';
// import BottomNav from '../../components/nav';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const logos = [
//     require('../../assets/hacker_9052116.png'),
//     require('../../assets/hacker_9052116.png'),
//     require('../../assets/hacker_9052116.png'),
//     require('../../assets/hacker_9052116.png'),
//   ];

//   const products = [
//     {id: 1, image: require('../../assets/shop1.png')},
//     {id: 2, image: require('../../assets/shop2.png')},
//     {id: 3, image: require('../../assets/shop3.png')},
//     {id: 4, image: require('../../assets/shop4.png')},
//     {id: 5, image: require('../../assets/shop5.png')},
//   ];

//   const shops = [
//     {
//       id: 1,
//       name: 'Shop One',
//       image: require('../../assets/hacker_9052116.png'),
//       rating: '4.5',
//       category: 'Electronics',
//     },
//     {
//       id: 2,
//       name: 'Shop Two',
//       image: require('../../assets/hacker_9052116.png'),
//       rating: '4.8',
//       category: 'Fashion',
//     },
//     {
//       id: 3,
//       name: 'Shop Three',
//       image: require('../../assets/hacker_9052116.png'),
//       rating: '4.2',
//       category: 'Groceries',
//     },
//     {
//       id: 4,
//       name: 'Shop Four',
//       image: require('../../assets/hacker_9052116.png'),
//       rating: '4.6',
//       category: 'Electronics',
//     },
//   ];

//   const renderShopItem = ({item}) => (
//     <TouchableOpacity
//       style={styles.shopItem}
//       // onPress={() => handleShopPress(item.id)}
//     >
//       <Image source={item.image} style={styles.shopImage} />
//     </TouchableOpacity>
//   );

//   let homeIcon = {...styles.iconWrap, ...styles.homeIconWrap};
//   let homeIcon2 = {...styles.navIcon, ...styles.homeIcon};

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header Section */}
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.welcomeText}>Welcome</Text>
// {/*             <LocationSelector /> */}
//             <DummyLocationSelector />
//           </View>
//           <View style={styles.headerIconsWrap}>
//             <TouchableOpacity
//               style={styles.headerIcon}
//               activeOpacity={0.7}>
//               <Image
//                 source={require('../../assets/notify.png')}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.headerIcon}
//               onPress={() => navigation.navigate('Profile')}
//               activeOpacity={0.7}>
//               <Image
//                 source={require('../../assets/profile.png')}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchBarContainer}>
//           <View style={styles.searchBar}>
//             <Image
//               source={require('../../assets/search.png')}
//               style={styles.searchIcon}
//             />
//             <TextInput placeholder="Search Products" style={styles.searchInput} />
//           </View>
//           <View style={styles.filterButtonContainer}>
//             <TouchableOpacity style={styles.filterButton}>
//               <Image source={require('../../assets/filter.png')} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.shopListContainer}>
//           <FlatList
//             data={products}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={item => item.id.toString()}
//             renderItem={renderShopItem}
//             style={styles.shopList}
//             nestedScrollEnabled={true}
//           />
//         </View>

//         <View style={styles.megaSaleBanner}>
//           <ImageCarousel />
//         </View>

//         <View style={styles.productsContainer}>
//           <FlatList
//             data={products}
//             numColumns={2}
//             scrollEnabled={false}
//             keyExtractor={item => item.id.toString()}
//             renderItem={({item}) => (
//               <TouchableOpacity
//                 style={styles.productCard}
//                 activeOpacity={0.7}>
//                 <Image source={item.image} style={styles.productImage} />
//                 <View style={styles.productInfo}>
//                   <Text style={styles.productName} numberOfLines={1}>
//                     {item.name}
//                   </Text>
//                   <View style={styles.productDetails}>
//                     <Text style={styles.productPrice}>{item.price}</Text>
//                     <View style={styles.ratingContainer}>
//                       <Image
//                         source={require('../../assets/notify.png')}
//                         style={styles.ratingIcon}
//                       />
//                       <Text style={styles.ratingText}>{item.rating}</Text>
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF9F6',
//   },
//   scrollContent: {
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   productsContainer: {
//     paddingHorizontal: 10,
//   },
//   // ... rest of your existing styles ...
//   homeIconWrap: {
//     backgroundColor: '#FF6F61',
//   },
//   iconWrap: {
//     width: 65,
//     height: 65,
//     backgroundColor: '#90CAAE',
//     borderRadius: 50,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchBarContainer: {
//     width: 362,
//     height: 55.97,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   headerIconsWrap: {
//     width: 92,
//     height: 40,
//     flexDirection: 'row',
//     marginRight: 10,
//     gap: 12,
//   },
//   icon: {
//     width: 15,
//     height: 15,
//     resizeMode: 'cover',
//   },
//   headerIcon: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 15.71,
//     borderWidth: 1.27,
//     borderColor: '#3D405BBF',
//     width: 40,
//     height: 40,
//     gap: 9.82,
//     borderRadius: 31.86,
//   },
//   searchBar: {
//     width: 290,
//     height: 55.97,
//     borderWidth: 1.08,
//     borderColor: '#81B29A',
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginHorizontal: 20,
//     marginVertical: 10,
//     backgroundColor: '#81B29A1A',
//     borderRadius: 30,
//     padding: 10,
//   },
//   searchIcon: {
//     width: 21.53,
//     height: 21.53,
//     paddingTop: 1.79,
//     paddingRight: 1.56,
//     paddingBottom: 1.15,
//     paddingLeft: 1.79,
//   },
//   searchInput: {
//     flex: 1,
//     height: 55,
//   },
//   filterButton: {
//     backgroundColor: '#FF6F61',
//     padding: 10,
//     borderRadius: 8,
//     width: 55.97,
//     height: 55.97,
//     padding: 17.22,
//     gap: 10.76,
//     borderRadius: 34.92,
//     opacity: 1,
//   },
//   megaSaleBanner: {
//     width: 362,
//     height: 151,
//     marginHorizontal: 20,
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   shopListContainer: {
//     width: 362,
//     height: 60,
//   },
//   shopList: {
//     paddingHorizontal: 15,
//   },
//   shopItem: {
//     width: 60,
//     height: 60,
//     marginHorizontal: 5,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   shopImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//   },
//   productCard: {
//     flex: 1,
//     margin: 10,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     alignItems: 'center',
//     padding: 10,
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//   },
// });

// export default HomeScreen;

import React, {useState, useEffect} from 'react';
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
import ImageCarousel from '../../components/carousel';
import DummyLocationSelector from '../../components/dummyLocation';
import {useNavigation} from '@react-navigation/native';
import BottomNav from '../../components/nav';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showStoreResults, setShowStoreResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('New York, USA');
  const products = [
    {id: 1, image: require('../../assets/shop1.png')},
    {id: 2, image: require('../../assets/shop2.png')},
    {id: 3, image: require('../../assets/shop3.png')},
    {id: 4, image: require('../../assets/shop4.png')},
    {id: 5, image: require('../../assets/shop5.png')},
  ];

  // Dummy store data with locations and products
  const nearbyStores = [
    {
      id: 1,
      name: 'Electronics Hub',
      image: require('../../assets/shop1.png'),
      distance: '0.5 km',
      location: 'New York, USA',
      rating: '4.5',
      products: ['Wireless Headphones', 'Smart Watch', 'Laptop'],
    },
    {
      id: 2,
      name: 'Tech Store',
      image: require('../../assets/shop2.png'),
      distance: '1.2 km',
      location: 'New York, USA',
      rating: '4.8',
      products: ['Smart Watch', 'Phone', 'Tablet'],
    },
    {
      id: 3,
      name: 'Gadget World',
      image: require('../../assets/shop3.png'),
      distance: '2.1 km',
      location: 'New York, USA',
      rating: '4.2',
      products: ['Wireless Headphones', 'Camera', 'Speaker'],
    },
  ];

  // Filter stores based on search query and location
  const getFilteredStores = () => {
    return nearbyStores
      .filter(
        store =>
          store.location === selectedLocation &&
          store.products.some(product =>
            product.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      )
      .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  };

  const handleSearch = text => {
    setSearchQuery(text);
    setShowStoreResults(text.length > 0);
  };

  // Keep your existing product rendering logic
  const renderShopItem = ({item}) => (
    <TouchableOpacity style={styles.shopItem}>
      <Image source={item.image} style={styles.shopImage} />
    </TouchableOpacity>
  );

  // New store result item component
  const renderStoreResult = ({item}) => (
    <TouchableOpacity style={styles.storeResultItem}>
      <Image source={item.image} style={styles.storeResultImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeDistance}>{item.distance}</Text>
      </View>
      <View style={styles.storeRating}>
        <Image
          source={require('../../assets/notify.png')}
          style={styles.ratingIcon}
        />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Keep your existing header section */}
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

        {/* Modified Search Bar Section */}
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
          </View>
          <View style={styles.filterButtonContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Image source={require('../../assets/filter.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Store Results */}
        {showStoreResults && (
          <View style={styles.storeResultsContainer}>
            <Text style={styles.storeResultsTitle}>Nearby Stores</Text>
            <FlatList
              data={getFilteredStores()}
              renderItem={renderStoreResult}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
              ListEmptyComponent={
                <Text style={styles.noStoresText}>
                  No stores found with this product nearby
                </Text>
              }
            />
          </View>
        )}

        {/* Keep your existing sections when not showing store results */}
        {!showStoreResults && (
          <>
            <View style={styles.shopListContainer}>
              <FlatList
                data={products}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={renderShopItem}
                style={styles.shopList}
                nestedScrollEnabled={true}
              />
            </View>

            <View style={styles.megaSaleBanner}>
              <ImageCarousel />
            </View>

            <View style={styles.productsContainer}>
              <FlatList
                data={products}
                numColumns={2}
                scrollEnabled={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.productCard}
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
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  storeResultsContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    marginTop: 0,
  },
  storeResultsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
  noStoresText: {
    textAlign: 'center',
    color: '#666',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  productsContainer: {
    paddingHorizontal: 10,
  },
  // ... rest of your existing styles ...
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
    alignItems: 'center',
    marginVertical: 20,
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
  megaSaleBanner: {
    width: 362,
    height: 151,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  shopListContainer: {
    width: 362,
    height: 60,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
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
});

export default HomeScreen;
