import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrdenItem from '../components/OrdenItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Ordenes = () => {
  const localId = useSelector((state) => state.auth.localId)
  const { data: orders, error, isLoading } = useGetOrdersQuery(localId)

  if (isLoading) {
    return <Text>Cargando...</Text>
  }

  if (error) {
    return <Text>Error al cargar las órdenes</Text>
  }

  if (!orders || orders.length === 0) {
    return <Text>No hay órdenes disponibles</Text>
  }

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrdenItem order={item} />}
    />
  )
}

export default Ordenes
