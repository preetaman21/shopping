import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

const Wishlist = ({navigation}) => {
  const [data , setData]= useState(0)
  return (
    <View>
      <Text>Wishlist</Text>
      <Text>{data}</Text>
      <Pressable onPress={()=>(setData(data+1))}>
      <Text>Add</Text>
      </Pressable>
      <Pressable onPress={()=>(setData(0))}>
        <Text>Clear</Text>
      </Pressable>
    </View>
  )
}

export default Wishlist