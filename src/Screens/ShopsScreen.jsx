import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CategoryItem = ({title, image, bgColor}) => (
  <TouchableOpacity style={[styles.categoryCard]}>
    <Image source={image} style={styles.categoryImage} />
    {/* <Text style={styles.categoryTitle}>{title}</Text> */}
  </TouchableOpacity>
);

const ShopsScreen = () => {
  const navigation = useNavigation();

  let shops = [
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
    {
      id: 3,
      address: 'Bismi Nadakkavu, Calicut',
      name: 'Bismi',
      image: require('../../assets/shop3.png'),
      distance: '2.1 km',
      location: 'Nadakkavu, Calicut',
      rating: '4.2',
    },
    {
      id: 4,
      address: 'Palazhi, Calicut',
      name: 'Tech Store',
      image: require('../../assets/shop4.png'),
      distance: '1.2 km',
      location: 'Palazhi, Calicut',
      rating: '4.8',
    },
    {
      id: 5,
      address: 'Bismi Nadakkavu, Calicut',
      name: 'Bismi',
      image: require('../../assets/shop5.png'),
      distance: '2.1 km',
      location: 'Nadakkavu, Calicut',
      rating: '4.2',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shops</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.categoryGrid}>
          {shops.map((shop, index) => (
            <CategoryItem
              key={index}
              title={shop.title}
              image={shop.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:600
    // backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    padding: 16,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  categoryGrid: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    // padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 73,
    height: 73,
    resizeMode: 'contain',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default ShopsScreen;
