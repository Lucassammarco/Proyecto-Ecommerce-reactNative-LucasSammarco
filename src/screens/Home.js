import { StyleSheet, Text, View, FlatList } from 'react-native';
import Categories from '../components/Categories';
import Search from '../components/Search';


const Home = ({navigation}) => {
 
  return (
    <View>
      <Search/>
      <Categories navigation={navigation}/>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
