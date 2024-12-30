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
  <TouchableOpacity style={[styles.categoryCard, {backgroundColor: bgColor}]}>
    <Image source={image} style={styles.categoryImage} />
    {/* <Text style={styles.categoryTitle}>{title}</Text> */}
  </TouchableOpacity>
);

const ShopsScreen = () => {
  const navigation = useNavigation();

  const categories = [
    {
      title: 'Electronics',
      image: require('../../assets/electronic.png'),
      bgColor: '#FFE8E8',
    },
    {
      title: 'Food',
      image: require('../../assets/food.png'),
      bgColor: '#FFE8D6',
    },
    {
      title: 'Laundry & Cleaning',
      image: require('../../assets/clean.png'),
      bgColor: '#E8F8FF',
    },
    {
      title: 'Clothes',
      image: require('../../assets/cloth.png'),
      bgColor: '#E8FFE8',
    },
    // Add more categories as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.categoryGrid}>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              image={category.image}
              bgColor={category.bgColor}
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
    // padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
