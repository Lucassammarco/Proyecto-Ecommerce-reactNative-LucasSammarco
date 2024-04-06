import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdenesStack from './OrdenesStack';
import CartStack from './CartStack';
import ShopStack from './ShopStack';
import TabIcon from '../components/TabIcon';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabbar,

            }}>
            <Tab.Screen name="Shop" component={ShopStack} options={{
                tabBarIcon: () => {
                    return <TabIcon title={'Productos'} name={'home'} />
                }
            }} />
            <Tab.Screen name="Orden" component={OrdenesStack} options={{
                tabBarIcon: () => {
                    return <TabIcon title={'Ordenes'} name={'list'} />
                }
            }} />
            <Tab.Screen name="CartStack" component={CartStack} options={{
                tabBarIcon: () => {
                    return <TabIcon title={'Carrito'} name={'shopping-cart'} />
                }
            }} />
             <Tab.Screen name="ProfileStack" component={ProfileStack} options={{
                tabBarIcon: () => {
                    return <TabIcon title={'Perfil'} name={'user'} />
                }
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation

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