import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapPreview = ({latitude,longitud}) => {
  return (
    <Image source={require("../../assets/image/map.jpg")} style={styles.image}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        borderRadius:10,
    }
})