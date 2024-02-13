import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home  from './src/screens/Home'
import ProducsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import { fontsColection } from './src/utils/global/fonts'

const App = () => {

  const [fontsLoaded] = useFonts(fontsColection);

  const [categorySelected,setCategorySelected] = useState("")

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  useEffect(()=>{
    console.log(categorySelected)
  },[categorySelected])

  if(!fontsLoaded) {return null}

  return (
    <>
      {categorySelected ? 
                    <ProducsByCategory categorySelected = {categorySelected}/>
                  :
                  <Home selectedCategoryState={selectedCategoryState} />}
    </>
  )
}

export default App