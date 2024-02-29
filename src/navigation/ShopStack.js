import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import ProducsByCategory from '../screens/ProductsByCategory'
import Header from '../components/Header'
import ProductDetail from '../screens/ProductDetail'

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={({route, navigation})=>{
        return {
          header: () =>{
            return <Header 
                            title= {route.name === "Home" ? "Fisherman's Paradise" :
                                   route.name === "Categorias" ? "Productos" :
                                  route.name === "Detalle de producto" ? "Detalle de producto" : null }/>
          }
        }
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={ProducsByCategory} />
        <Stack.Screen name="Detalle de producto" component={ProductDetail} />
      </Stack.Navigator>
  )
}

export default ShopStack