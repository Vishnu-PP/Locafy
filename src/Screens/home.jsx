import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageCarousel from '../../components/carousel';
function Home() {
    const offers = [
        {
          id: 1,
          shopImg: require('../../assets/shop1.png'),
          name: 'Shop One',
          image: require('../../assets/offer1.png'),
          rating: '4.5',
          category: 'Electronics',
        },
        {
          id: 2,
          shopImg: require('../../assets/shop2.png'),
          name: 'Shop Two',
          image: require('../../assets/offer2.png'),
          rating: '4.8',
          category: 'Fashion',
        },
        {
          id: 3,
          shopImg: require('../../assets/shop3.png'),
          name: 'Shop Three',
          image: require('../../assets/offer3.png'),
          rating: '4.2',
          category: 'Groceries',
        },
        {
          id: 4,
          shopImg: require('../../assets/shop4.png'),
          name: 'Shop Four',
          image: require('../../assets/offer4.png'),
          rating: '4.6',
          category: 'Electronics',
        },
        {
          id: 5,
          shopImg: require('../../assets/shop5.png'),
          name: 'Shop Five',
          image: require('../../assets/offer2.png'),
          rating: '4.6',
          category: 'Electronics',
        },
      ];
      const products = [
        {id: 1, image: require('../../assets/shop1.png')},
        {id: 2, image: require('../../assets/shop2.png')},
        {id: 3, image: require('../../assets/shop3.png')},
        {id: 4, image: require('../../assets/shop4.png')},
        {id: 5, image: require('../../assets/shop5.png')},
      ];

      const renderShopItem = ({item}) => (
        <TouchableOpacity style={styles.shopItem}>
          <Image source={item.image} style={styles.shopImage} />
        </TouchableOpacity>
      );
      let banner1 = require('../../assets/Banner.png');
      let banner2 = require('../../assets/Banner2.png');
  return (
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
      {/* <View style={styles.megaSaleBanner}>
          <Image source={require('../../assets/Banner.png')} />
        </View> */}
      <View style={styles.megaSaleBanner}>
        <ImageCarousel images={[banner1, banner2]} />
      </View>

      <View style={styles.productsContainer}>
        <FlatList
          data={offers}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
              {/* Top Image */}
              <Image source={item.image} style={styles.productImage} />

              {/* Shop details */}
              <View style={styles.offerDetails}>
                <Image source={item.shopImg} style={styles.shopImage2} />
                <View style={styles.shopTextContainer}>
                  <Text style={styles.offerShop}>{item.name}</Text>
                  <Text style={styles.offerDesc}>Limited time deal</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  productCard: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 120, // Adjust as needed
    resizeMode: 'cover',
  },
  offerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // gap: 1,
  },
  shopImage2: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#81B29A80', // Circular image
    marginRight: 20,
    borderRadius: 5,
  },
  shopImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  shopTextContainer: {
    flex: 1,
  },
  offerShop: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  offerDesc: {
    fontSize: 12,
    color: 'maroon',
  },

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
  storeAddress: {
    fontSize: 12,
    fontWeight: '200',
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
    paddingBottom: 110,
    flexGrow: 1,
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
  closeButtonText: {
    marginRight: 10,
    fontSize: 14,
    fontWeight:100,
    color: '#333',
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
});
export default Home;