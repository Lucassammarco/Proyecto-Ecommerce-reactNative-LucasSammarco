import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import { StyleSheet, View } from 'react-native';
import OrdenesStack from './OrdenesStack';
import CartStack from './CartStack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabbar,
                
            }}>
                <Tab.Screen name="Shop" component={ShopStack}  options={{
                    tabBarIcon: () => {
                        return <TabIcon title={'Productos'} name={'home'}/>
                    }
                }}/>
                <Tab.Screen name="Ordenes" component={OrdenesStack} options={{
                    tabBarIcon: () => {
                        return <TabIcon title={'Ordenes'} name={'list'}/>
                    }
                }}/>
                <Tab.Screen name="CartStack" component={CartStack} options={{
                    tabBarIcon: () => {
                        return <TabIcon title={'Carrito'} name={'shopping-cart'}/>
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabbar:{
        backgroundColor: '#ffffff', 
        borderTopWidth: 1, 
        borderTopColor: '#dddddd', 
        height: 70, 
        justifyContent: 'center', 
        alignItems: 'center',
        position:'absolute',
    },
})