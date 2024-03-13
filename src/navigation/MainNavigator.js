import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import Profile from '../screens/Profile'
import ProfileStack from './ProfileStack';



const MainNavigator = () => {

    const user = useSelector((state) => state.auth)
    useEffect(()=>{
        console.log(user)
    },[user])

    return (
        <NavigationContainer>
          {user.idToken ? <TabNavigation/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNavigator

