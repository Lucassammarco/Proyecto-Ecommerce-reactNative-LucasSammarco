import { View, Text, FlatList } from 'react-native'
import React from 'react'
import orden from '../utils/data/orden.json'
import OrdenItem from '../components/OrdenItem'

const Ordenes = () => {
  return (
    <FlatList
      data={orden}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <OrdenItem orden={item}/>}
  
    />
  )
}

export default Ordenes