import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const Card = ({name,price,desc,rating, image}: any) => {
  return (
    <View className='w-[50%] p-2'>
      <View className="bg-gray-700 rounded-xl m-2 p-2">
            <Image source={{uri: image}} 
            className="w-full h-40 rounded-xl "/>

            <Text className="text-2xl font-bold">{name}</Text>
            <Text className="text-xl text-gray-600">{desc}</Text>

            <View className="flex flex-row justify-between items-center ">
                    <Text className="text-2xl py-3">{price}</Text>
                    <Text className="text-2xl font-semibold text-white bg-gray-500 rounded-2xl p-1">{rating}</Text>
            </View>
                    <Pressable>
                    <Text className="bg-gray-700 p-2 rounded-full text-gray-100 text-xl font-semibold">
                         Buy Now
                    </Text>
                 </Pressable>
        </View>
      </View>
  )
}

export default Card