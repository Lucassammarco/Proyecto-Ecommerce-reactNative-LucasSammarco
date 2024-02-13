import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import {EvilIcons,AntDesign} from "@expo/vector-icons"
import { useState } from 'react';

const Search = ({handlerKeyword}) => {
    const [input,setInput] = useState("")
    
    const handleInput = (t)=> setInput(t)

    const [error, setError] = useState("")

    const search = () => {
        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(expression.test(input)){
            setError("Caracteres no validos")
            return
        }
        setError("")
        handlerKeyword(input)
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        handlerKeyword("")
        handleInput("")
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value= {input}
        onChangeText={handleInput}
        placeholder='Buscar'
      />
      <Pressable onPress={search}>
        <EvilIcons name='search' size={35} color="black"/>
      </Pressable>
      <Pressable onPress={resetSearch}>
        <AntDesign name='closecircleo' size={25} color="black"/>
      </Pressable>
        <View>
            {error ? <Text style={styles.error}>error</Text> : null}
        </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ecf0f1', 
    flexDirection:"row",
    alignItems:"center",
  },
  input: {
    flex:1,
    height: 40,
    borderColor: '#3498db', 
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff', 
  },
  error:{
    color: 'red',
    marginLeft: 10,     
    fontSize: 12,
  },
});

export default Search;
