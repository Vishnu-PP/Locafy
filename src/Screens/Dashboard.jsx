// import React, {useState, useEffect} from 'react';
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

// import DummyLocationSelector from '../../components/dummyLocation';
// import {useNavigation} from '@react-navigation/native';
// import Home from './home';
// import BottomNav from '../../components/nav';
// import CategoryScreen from './CategoryScreen';
// import ShopsScreen from './ShopsScreen';
// import FavScreen from './FavScreen';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showStoreResults, setShowStoreResults] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState('Palazhi, Calicut');

//   // Dummy store data with locations and products
//   let products = [
//     {
//       id: 1,
//       name: 'Wireless Headphones',
//       image: require('../../assets/headphones.png'),
//       shop: [{
//         id: 1,
//         address: '2nd Floor, Hilite Mall, Palazhi, Calicut',
//         name: 'Tata Chroma',
//         image: require('../../assets/shop1.png'),
//         distance: '0.5 km',
//         location: 'Palazhi, Calicut',
//       },
//       {
//         id: 2,
//         address: 'Palazhi, Calicut',
//         name: 'Tech Store',
//         image: require('../../assets/shop2.png'),
//         distance: '1.2 km',
//         location: 'Palazhi, Calicut',
//       },]
//     },
//     {
//       id: 2,
//       name: 'Smart Watch',
//       image: require('../../assets/smartwatch.png'),
//       shop: [
//       {
//         id: 3,
//         address: 'Bismi Nadakkavu, Calicut',
//         name: 'Bismi',
//         image: require('../../assets/shop3.png'),
//         distance: '2.1 km',
//         location: 'Nadakkavu, Calicut',
//       },]
//     },
//     {
//       id: 3,
//       name: 'Laptop',
//       image: require('../../assets/laptop.png'),
//       shop: [
//       {
//         id: 4,
//         address: 'Palazhi, Calicut',
//         name: 'Tech Store',
//         image: require('../../assets/shop2.png'),
//         distance: '1.2 km',
//         location: 'Palazhi, Calicut',
//       },]
//     },
//     {
//       id: 4,
//       name: 'Phone',
//       image: require('../../assets/phone.png'),
//       shop: [
//       {
//         id: 5,
//         address: 'Bismi Nadakkavu, Calicut',
//         name: 'Bismi',
//         image: require('../../assets/shop3.png'),
//         distance: '2.1 km',
//         location: 'Nadakkavu, Calicut',
//       },]
//     },
//     {
//       id: 5,
//       name: 'Tablet',
//       image: require('../../assets/tablet.png'),
//       shop: [
//       {
//         id: 6,
//         address: 'Palazhi, Calicut',
//         name: 'Tech Store',
//         image: require('../../assets/shop2.png'),
//         distance: '1.2 km',
//         location: 'Palazhi, Calicut',
//       },]
//     },
//   ];
//   const nearbyStores = [
//     {
//       id: 1,
//       address: '2nd Floor, Hilite Mall, Palazhi, Calicut',
//       name: 'Tata Chroma',
//       image: require('../../assets/shop1.png'),
//       distance: '0.5 km',
//       location: 'Palazhi, Calicut',
//       rating: '4.5',
//       products: ['Wireless Headphones', 'Smart Watch', 'Laptop'],
//     },
//     {
//       id: 2,
//       address: 'Palazhi, Calicut',
//       name: 'Tech Store',
//       image: require('../../assets/shop2.png'),
//       distance: '1.2 km',
//       location: 'Palazhi, Calicut',
//       rating: '4.8',
//       products: ['Smart Watch', 'Phone', 'Tablet'],
//     },
//     {
//       id: 3,
//       address: 'Bismi Nadakkavu, Calicut',
//       name: 'Bismi',
//       image: require('../../assets/shop3.png'),
//       distance: '2.1 km',
//       location: 'Nadakkavu, Calicut',
//       rating: '4.2',
//       products: ['Wireless Headphones', 'Camera', 'Speaker'],
//     },
//   ];

//   // Filter stores based on search query and location
//   const getFilteredStores = () => {
//     return nearbyStores
//       .filter(
//         store =>
//           store.location === selectedLocation &&
//           store.products.some(product =>
//             product.toLowerCase().includes(searchQuery.toLowerCase()),
//           ),
//       )
//       .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
//   };

//   const handleSearch = text => {
//     setSearchQuery(text);
//     setShowStoreResults(text.length > 0);
//   };

//   // Keep your existing product rendering logic
//   // let banner3 = require('../../assets/Banner3.png');
//   // New store result item component
//   const renderStoreResult = ({item}) => (
//     <TouchableOpacity style={styles.storeResultItem}>
//       <Image source={item.image} style={styles.storeResultImage} />
//       <View style={styles.storeInfo}>
//         <Text style={styles.storeName}>{item.name}</Text>
//         <Text style={styles.storeAddress}>{item.address}</Text>
//         <Text style={styles.storeDistance}>{item.distance}</Text>
//       </View>
//       <View style={styles.storeRating}>
//         <Image
//           source={require('../../assets/star.png')}
//           style={styles.ratingIcon}
//         />
//         <Text style={styles.ratingText}>{item.rating}</Text>
//       </View>
//     </TouchableOpacity>
//   );
//   let currentRoute = 'Home';

//   const [currentView, setCurrentView] = useState('Home');

//   const renderContent = () => {
//     switch (currentView) {
//       case 'Home':
//         return <Home />;
//       case 'Category':
//         return <CategoryScreen />;
//       case 'Favourite':
//         return <FavScreen />;
//       case 'Shops':
//         return <ShopsScreen />;
//       default:
//         return <Home />;
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Keep your existing header section */}
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.welcomeText}>Welcome</Text>
//             <DummyLocationSelector
//               onLocationSelect={location => setSelectedLocation(location)}
//             />
//           </View>
//           <View style={styles.headerIconsWrap}>
//             <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
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

//         {/* Modified Search Bar Section */}
//         <View style={styles.searchBarContainer}>
//           <View style={styles.searchBar}>
//             <Image
//               source={require('../../assets/search.png')}
//               style={styles.searchIcon}
//             />
//             <TextInput
//               placeholder="Search Products"
//               style={styles.searchInput}
//               value={searchQuery}
//               onChangeText={handleSearch}
//             />
//             {searchQuery && (
//               <Text
//                 onPress={() => handleSearch('')}
//                 style={styles.closeButtonText}>
//                 ✕
//               </Text>
//             )}
//           </View>
//           <View style={styles.filterButtonContainer}>
//             <TouchableOpacity style={styles.filterButton}>
//               <Image source={require('../../assets/filter.png')} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Store Results */}
//         {showStoreResults && (
//           <View style={styles.storeResultsContainer}>
//             <Text style={styles.storeResultsTitle}>Nearby Stores</Text>
//             <FlatList
//               data={getFilteredStores()}
//               renderItem={renderStoreResult}
//               keyExtractor={item => item.id.toString()}
//               scrollEnabled={false}
//               ListEmptyComponent={
//                 <Text style={styles.noStoresText}>
//                   No stores found with this product nearby
//                 </Text>
//               }
//             />
//           </View>
//         )}

//         {/* Keep your existing sections when not showing store results */}
//         {!showStoreResults &&
//           // <>
//           //   <View style={styles.shopListContainer}>
//           //     <FlatList
//           //       data={products}
//           //       horizontal
//           //       showsHorizontalScrollIndicator={false}
//           //       keyExtractor={item => item.id.toString()}
//           //       renderItem={renderShopItem}
//           //       style={styles.shopList}
//           //       nestedScrollEnabled={true}
//           //     />
//           //   </View>
//           //   {/* <View style={styles.megaSaleBanner}>
//           //     <Image source={require('../../assets/Banner.png')} />
//           //   </View> */}
//           //   <View style={styles.megaSaleBanner}>
//           //     <ImageCarousel images={[banner1, banner2]} />
//           //   </View>

//           //   <View style={styles.productsContainer}>
//           //     <FlatList
//           //       data={offers}
//           //       numColumns={2}
//           //       scrollEnabled={false}
//           //       keyExtractor={item => item.id.toString()}
//           //       renderItem={({item}) => (
//           //         <TouchableOpacity
//           //           style={styles.productCard}
//           //           activeOpacity={0.7}>
//           //           {/* Top Image */}
//           //           <Image source={item.image} style={styles.productImage} />

//           //           {/* Shop details */}
//           //           <View style={styles.offerDetails}>
//           //             <Image source={item.shopImg} style={styles.shopImage2} />
//           //             <View style={styles.shopTextContainer}>
//           //               <Text style={styles.offerShop}>{item.name}</Text>
//           //               <Text style={styles.offerDesc}>Limited time deal</Text>
//           //             </View>
//           //           </View>
//           //         </TouchableOpacity>
//           //       )}
//           //     />
//           //   </View>
//           // </>
//           renderContent()}
//       </ScrollView>
//       <BottomNav currentRoute={currentView} onRouteChange={setCurrentView} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   productsContainer: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   productCard: {
//     flex: 1,
//     margin: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     backgroundColor: '#ffffff',
//     overflow: 'hidden',
//   },
//   productImage: {
//     width: '100%',
//     height: 120, // Adjust as needed
//     resizeMode: 'cover',
//   },
//   offerDetails: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     // gap: 1,
//   },
//   shopImage2: {
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#81B29A80', // Circular image
//     marginRight: 20,
//     borderRadius: 5,
//   },
//   shopImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//   },
//   shopTextContainer: {
//     flex: 1,
//   },
//   offerShop: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   offerDesc: {
//     fontSize: 12,
//     color: 'maroon',
//   },

//   storeResultsContainer: {
//     padding: 15,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     margin: 10,
//     marginTop: 0,
//   },
//   storeResultsTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   storeResultItem: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     alignItems: 'center',
//   },
//   storeResultImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   storeInfo: {
//     flex: 1,
//   },
//   storeName: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   storeAddress: {
//     fontSize: 12,
//     fontWeight: '200',
//   },
//   ratingIcon: {
//     width: 15,
//     height: 15,
//     resizeMode: 'cover',
//   },
//   ratingText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   storeDistance: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   storeRating: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 5,
//     borderRadius: 15,
//   },
//   noStoresText: {
//     textAlign: 'center',
//     color: '#666',
//     padding: 20,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF9F6',
//   },
//   scrollContent: {
//     paddingTop: 20,
//     paddingBottom: 110,
//     flexGrow: 1,
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
//   closeButtonText: {
//     marginRight: 10,
//     fontSize: 14,
//     fontWeight: 100,
//     color: '#333',
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
// });

// export default HomeScreen;

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
      <View style={styles.shopSection}>
        <Image source={item.productImage} style={styles.productImage} />
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.shopInfo}>
          <Text style={styles.shopName}>{item.shopName}</Text>
          <Text style={styles.shopAddress}>{item.shopAddress}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Image
            source={require('../../assets/placeholder.png')}
            style={styles.ratingIcon}
          />
          <Text style={styles.ratingText}>{item.distance}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default HomeScreen;
