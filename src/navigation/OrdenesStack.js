import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header';
import Ordenes from '../screens/Ordenes';

const Stack = createNativeStackNavigator();

const OrdenesStack = () => {
  return (
    <Stack.Navigator
            initialRouteName='OrdenesStack'   
            screenOptions={({navigation})=>{
                return {
                  header: () =>{
                    return <Header 
                                    title= {'Orden'} navigation={navigation}/>
                  }
                }
              }} 
    >
        <Stack.Screen name='Ordenes' component={Ordenes}/>
    </Stack.Navigator>
  )
}

export default OrdenesStack