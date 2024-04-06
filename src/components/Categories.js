import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { useGetCategoriesQuery } from '../app/services/shop'
import CardCategory from './CardCategory'

const Categories = ({navigation}) => {
  
  const {data:categories} = useGetCategoriesQuery()

  return (
    <FlatList 
      data={categories}
      keyExtractor={(item) => item} 
      renderItem={({item}) => (
        <CardCategory item={item} navigation={navigation}/>
      )}
      contentContainerStyle={{ paddingBottom: 140 }} 
    />
  )
}

export default Categories

const styles = StyleSheet.create({
    
})
