import { View, Text, FlatList } from 'react-native'
import React from 'react'
import orden from '../utils/data/orden.json'
import OrdenItem from '../components/OrdenItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Ordenes = () => {

  const localId = useSelector((state) => state.auth.localId)
  const {data:orders} = useGetOrdersQuery(localId)
  return (
    <FlatList
      data={orders}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <OrdenItem order={item}/>}
  
    />
  )
}

export default Ordenes