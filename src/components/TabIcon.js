import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import React from 'react'

const TabIcon = ({title, name}) => {
  return (
    <View style={styles.container}>
      <Entypo name={name} size={30}/>
      <Text>{title}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    }
})