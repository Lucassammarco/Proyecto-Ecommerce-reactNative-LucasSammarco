import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement , incrementByAmount} from '../feactures/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state)=> state.counter.value)
    const [number, setNumber] =useState(0)
    const dispatch = useDispatch()

  return (
    <View>
      <Button title='aumentar' onPress={() => dispatch(increment())}/>
      <Text>{count}</Text>
      <Button title='Disminuir' onPress={() => dispatch(decrement())}/>
      <TextInput onChangeText={(t)=> setNumber(parseInt(t))}/>
      <Button title='monto' onPress={ ()=> dispatch(incrementByAmount(number))}/>
      
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})