import Header from './src/components/Header'
import React, { useEffect, useState } from 'react'
import Home from './src/screens/Home'
import ProducsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import { fontsColection } from './src/utils/global/fonts'
import ProductDetail from './src/screens/ProductDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts(fontsColection);

  if (!fontsLoaded) { return null }
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={({route})=>{
        return {
          header: () =>{
            return <Header title= {route.name === "Home" ? "Fisherman's Paradise" :
                                   route.name === "Categorias" ? "Productos" :
                                  route.name === "Detalle de producto" ? "Detalle de producto" : null }/>
          }
        }
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={ProducsByCategory} />
        <Stack.Screen name="Detalle de producto" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App