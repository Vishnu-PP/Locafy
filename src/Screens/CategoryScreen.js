import {StyleSheet, Text, View} from 'react-native';
import BottomNav from '../../components/nav';

function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    paddingTop: 20,
  },
});
export default CategoryScreen;
