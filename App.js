import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { fontsColection } from './src/utils/global/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/utils/db'


init();

const App = () => {

  const [fontsLoaded] = useFonts(fontsColection);

  if (!fontsLoaded) { return null }
 
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  )
}

export default App