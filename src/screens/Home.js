import { StyleSheet, Text, View, FlatList } from 'react-native';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Counter from '../components/Counter';

const Home = ({navigation}) => {
 
  return (
    <View>
      <Counter/>
      <Search/>
      <Categories navigation={navigation}/>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
