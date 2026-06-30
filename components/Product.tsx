import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { productData } from '../constants/Products'
import { useNavigation } from '@react-navigation/native'

const Product = ({ ListHeaderComponent }: { ListHeaderComponent?: React.ReactElement }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={productData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}   
        renderItem={({ item }) => (
          <Pressable className="flex-1 m-2" onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <View className=" bg-pink-900 p-2 rounded-xl">
              <Text className="text-lg text-white font-bold">{item.title}</Text>

              <View className="justify-center flex-row bg-white rounded-2xl mt-2">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-40 my-2"
                  resizeMode="contain"
                />
              </View>

              <Text className="text-md text-pink-200 font-semibold mt-3">
                {item.description}
              </Text>

              <View className="flex-row justify-between mt-1">
                <Text className="text-lg  text-yellow-100 font-extrabold">
                  Rs. {item.price}
                </Text>
                <Text className="text-sm font-bold bg-green-700 px-2 rounded-xl text-white">
                  {item.rating}</Text>
              </View>
            </View>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}

export default Product