import { FlatList, StyleSheet, Text, View} from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProducByCategory from '../components/ProducByCategory'
import Search from '../components/Search'

const ProductsByCategory = ({route, navigation}) => {
  const {categorySelected} = route.params
  

  const [productsFiltered,setproductsFiltered] = useState([]) 

  const [keyword, setKeyword] = useState("")

  const handlerKeyword = (text) => {
    setKeyword(text)
  }

    useEffect(()=>{
      if(categorySelected) setproductsFiltered(products.filter(product => product.category === categorySelected))
      if(keyword)setproductsFiltered(productsFiltered.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const keywordLowr = keyword.toLowerCase()
        return productTitleLower.includes(keywordLowr)
        }))
    },
    [categorySelected,keyword])
    return(
        <>
            <Search handlerKeyword={handlerKeyword}/>
            <FlatList
              style={styles.container}
              data={productsFiltered}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ProducByCategory navigation={navigation} item={item} />}
            />
        </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})