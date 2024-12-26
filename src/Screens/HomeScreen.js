// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, TextInput, ScrollView, Image} from 'react-native';
// // import Carousel from 'react-native-snap-carousel';
// const HomeScreen = () => {
//   const [apiResponse, setApiResponse] = useState('');

//   // const testApi = async () => {
//   //   try {
//   //     const response = await fetch('http://10.0.2.2:5000/api/test');
//   //     const data = await response.json();
//   //     setApiResponse(data.message);
//   //   } catch (error) {
//   //     setApiResponse('Error: ' + error.message);
//   //   }
//   // };

//   const carouselItems = [
//         { id: '1', title: 'Carousel Item 1', image: 'https://via.placeholder.com/300x150' },
//         { id: '2', title: 'Carousel Item 2', image: 'https://via.placeholder.com/300x150' },
//         { id: '3', title: 'Carousel Item 3', image: 'https://via.placeholder.com/300x150' },
//       ];

//       // const handleSearch = (query) => {
//       //   setSearchQuery(query);
//       //   const results = shops.filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()));
//       //   setFilteredShops(results);
//       // };

//       // const renderShopItem = ({ item }) => (
//       //   <View style={styles.shopItem}>
//       //     <Image source={{ uri: item.image }} style={styles.shopImage} />
//       //     <Text style={styles.shopName}>{item.name}</Text>
//       //   </View>
//       // );

//       const renderCarouselItem = ({ item }) => (
//         <View style={styles.carouselItem}>
//           <Image source={{ uri: item.image }} style={styles.carouselImage} />
//           <Text style={styles.carouselText}>{item.title}</Text>
//         </View>
//       );

//   return (
//     <ScrollView style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search products..."
//         // value={searchQuery}
//         // onChangeText={handleSearch}
//       />
//       <Image source={{ uri: "https://via.placeholder.com/300x150" }} style={styles.carouselImage} />
//       {/* <Carousel
//         data={carouselItems}
//         renderItem={renderCarouselItem}
//         sliderWidth={300}
//         itemWidth={250}
//         layout="default"
//       /> */}
//     </ScrollView>
//     // <View style={styles.container}>
//     //   <Text style={styles.title}>Welcome to Locafy</Text>
//     //   {/* <Button title="Test API Connection" onPress={testApi} /> */}
//     //   {/* {apiResponse ? <Text style={styles.response}>{apiResponse}</Text> : null} */}
//     // </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   shopGrid: {
//     justifyContent: 'space-between',
//   },
//   shopItem: {
//     backgroundColor: '#f8f8f8',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 10,
//     flex: 1,
//     margin: 5,
//     padding: 10,
//   },
//   shopImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 5,
//   },
//   shopName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   carouselItem: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   carouselImage: {
//     width: 250,
//     height: 150,
//     borderRadius: 10,
//   },
//   carouselText: {
//     marginTop: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
// export default HomeScreen;

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
// // import Carousel from 'react-native-snap-carousel';

// // const HomeScreen = () => {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [filteredShops, setFilteredShops] = useState([]);

// //   const shops = [
// //     { id: '1', name: 'Shop 1', image: 'https://via.placeholder.com/100' },
// //     { id: '2', name: 'Shop 2', image: 'https://via.placeholder.com/100' },
// //     { id: '3', name: 'Shop 3', image: 'https://via.placeholder.com/100' },
// //     { id: '4', name: 'Shop 4', image: 'https://via.placeholder.com/100' },
// //     { id: '5', name: 'Shop 5', image: 'https://via.placeholder.com/100' },
// //   ];

// //   const carouselItems = [
// //     { id: '1', title: 'Carousel Item 1', image: 'https://via.placeholder.com/300x150' },
// //     { id: '2', title: 'Carousel Item 2', image: 'https://via.placeholder.com/300x150' },
// //     { id: '3', title: 'Carousel Item 3', image: 'https://via.placeholder.com/300x150' },
// //   ];

// //   const handleSearch = (query) => {
// //     setSearchQuery(query);
// //     const results = shops.filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()));
// //     setFilteredShops(results);
// //   };

// //   const renderShopItem = ({ item }) => (
// //     <View style={styles.shopItem}>
// //       <Image source={{ uri: item.image }} style={styles.shopImage} />
// //       <Text style={styles.shopName}>{item.name}</Text>
// //     </View>
// //   );

// //   const renderCarouselItem = ({ item }) => (
// //     <View style={styles.carouselItem}>
// //       <Image source={{ uri: item.image }} style={styles.carouselImage} />
// //       <Text style={styles.carouselText}>{item.title}</Text>
// //     </View>
// //   );

// //   return (
// //     <ScrollView style={styles.container}>
// //       <TextInput
// //         style={styles.searchBar}
// //         placeholder="Search shops..."
// //         value={searchQuery}
// //         onChangeText={handleSearch}
// //       />

// //       {/* Carousel */}
// //       <Carousel
// //         data={carouselItems}
// //         renderItem={renderCarouselItem}
// //         sliderWidth={300}
// //         itemWidth={250}
// //         layout="default"
// //       />

// //       {/* Shop Grid */}
// //       <Text style={styles.sectionTitle}>Shops</Text>
// //       <FlatList
// //         data={searchQuery ? filteredShops : shops}
// //         renderItem={renderShopItem}
// //         keyExtractor={(item) => item.id}
// //         numColumns={2}
// //         columnWrapperStyle={styles.shopGrid}
// //       />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     padding: 10,
// //   },
// //   searchBar: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     paddingHorizontal: 10,
// //     marginBottom: 10,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //   },
// //   shopGrid: {
// //     justifyContent: 'space-between',
// //   },
// //   shopItem: {
// //     backgroundColor: '#f8f8f8',
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //     flex: 1,
// //     margin: 5,
// //     padding: 10,
// //   },
// //   shopImage: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     marginBottom: 5,
// //   },
// //   shopName: {
// //     fontSize: 14,
// //     fontWeight: 'bold',
// //   },
// //   carouselItem: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   carouselImage: {
// //     width: 250,
// //     height: 150,
// //     borderRadius: 10,
// //   },
// //   carouselText: {
// //     marginTop: 5,
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default HomeScreen;

import React from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const logos = [
    require('../../assets/hacker_9052116.png'),
    require('../../assets/hacker_9052116.png'),
    require('../../assets/hacker_9052116.png'),
    require('../../assets/hacker_9052116.png'),
  ];

  const products = [
    {id: 1, image: require('../../assets/hacker_9052116.png')},
    {id: 2, image: require('../../assets/hacker_9052116.png')},
    {id: 3, image: require('../../assets/hacker_9052116.png')},
    {id: 4, image: require('../../assets/hacker_9052116.png')},
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
        </View>
        <View style={styles.headerIconsWrap}>
          <View style={styles.headerIcon}>
            <Image
              source={require('../../assets/notify.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.headerIcon}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.icon}
            />
          </View>
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

      {/* Logo Carousel */}
      <FlatList
        data={logos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Image source={item} style={styles.logo} />}
        style={styles.logoCarousel}
      />

      {/* Mega Sale Banner */}
      <View style={styles.megaSaleBanner}>
        <Text style={styles.megaSaleText}>Mega Sale</Text>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
          </View>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.iconWrap}>
          <Image
            source={require('../../assets/Home.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrap}>
          <Image source={require('../../assets/fav.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrap}>
          <Image
            source={require('../../assets/category.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrap}>
          <Image
            source={require('../../assets/Frame.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrap: {
    width: 65,
    height: 65,
    backgroundColor: '#FF6F61',
    height: 50,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: 362,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    // marginHorizontal: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    gap: 6.82,
  },
  icon: {
    width: 15, // Specify the width of the image
    height: 15, // Specify the height of the image
    resizeMode: 'cover',
  },
  headerIcon: { flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',
    padding: 10.91,
    borderWidth: 1.27,
    borderColor: '#3D405BBF',
    width: 40,
    height: 40,
    borderRadius: 22.12,
    marginRight: 10,
  },
  searchBar: {
    width: 290,
    borderWidth: 1.08,
    borderColor: '#81B29A',
    flexDirection: 'row',
    alignItems: 'center',
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
  megaSaleBanner: {
    width: 362,
    height: 151,
    marginHorizontal: 20,
    backgroundColor: '#FFD1C1',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
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
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // paddingVertical: 10,
    // backgroundColor: '#fff',
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
    width: 300,
    position: 'absolute', // Makes it float over the screen
    bottom: 20, // Distance from the bottom of the screen
    left: 20, // Distance from the left side
    right: 20, // Distance from the right side
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#81B29A',
    borderRadius: 70.62, // Rounded corners
    elevation: 5, // For Android shadow effect
    shadowColor: '#000', // For iOS shadow effect
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default HomeScreen;
