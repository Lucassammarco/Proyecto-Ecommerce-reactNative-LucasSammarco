import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import categories from '../utils/data/categories.json';
import Categories from '../components/Categories';
import Search from '../components/Search';

const Home = ({selectedCategoryState}) => {
 
  return (
    <View>
      <Header title={"Fisherman's Paradise"} />
      <Search/>
      <Categories selectedCategoryState ={selectedCategoryState}/>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
