import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { useEffect } from 'react';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '../utils/db';
import { setUser } from '../feactures/auth/authSlice';



const MainNavigator = () => {

    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        (async ()=>{
          const session  =  await fetchSession()
          if (session.rows.length){
            const user =  session.rows._array[0]
            dispatch(setUser(user))
          }
        })()
        },[])

    
    

    return (
        <NavigationContainer>
          {user.idToken ? <TabNavigation/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNavigator

