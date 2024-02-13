import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const ProducByCategory = ({item}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:item.thumbnail}}/>
      <Text style={styles.text}>{item.id}{item.title}</Text>
    </View>
  )
}

export default ProducByCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secundary,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        marginVertical:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        gap:20,
    },
    text:{
        width:"60%",
        fontSize:18,
        fontFamily:fonts.NanumGothicBold

    },
    image:{
        width:90,
        height:90,
        borderRadius:7,
    },
})