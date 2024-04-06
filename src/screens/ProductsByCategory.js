import { FlatList, StyleSheet, Text, View} from 'react-native'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { useEffect, useState } from 'react'
import ProducByCategory from '../components/ProducByCategory'
import Search from '../components/Search'

const ProductsByCategory = ({route, navigation}) => {
  const {categorySelected} = route.params
  
  const {data:products, isError, isLoading, error, isSuccess} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setproductsFiltered] = useState([]) 

  const [keyword, setKeyword] = useState("")

  const handlerKeyword = (text) => {
    setKeyword(text)
  }

    useEffect(()=>{
      setproductsFiltered(products)
      if(keyword)setproductsFiltered(products.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const keywordLowr = keyword.toLowerCase()
        return productTitleLower.includes(keywordLowr)
        }))
    },
    [categorySelected,keyword,products])
    return(
        <>
            <Search handlerKeyword={handlerKeyword}/>
            <FlatList
              style={styles.container}
              data={productsFiltered}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ProducByCategory navigation={navigation} item={item} />}
              contentContainerStyle={{ paddingBottom: 80 }} 
            />
        </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})