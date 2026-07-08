import { View, Text, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

const Cart = () => {
  return (
    <View>
      <View className="flex flex-row">
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/71oW9ddfGsL._SY625_.jpg' }}
          className="m-4 rounded-xl" width={120} height={120}
          alt=""
        />
        <View className="">
          <Text className="mt-4 ml-4 font-bold text-xl">description</Text>
          <Text className="ml-4 mt-1 font-bold text-xl">Price</Text>
          <View className="m-4 flex flex-row">
            <Text className="bg-[#425f83] p-2 font-bold text-white rounded-xl">Size: free</Text>
            <Text className="bg-[#425f83] p-2 font-bold text-white rounded-xl ml-4">Qty:1</Text>
          </View>
          <Text className="text-gray-600 ml-3">All issue easy returns</Text>
        </View>
      </View>
      <View className="flex flex-row justify-evenly mt-4 bg-gray-200 p-2">
        <View className="flex flex-row">
          <Ionicons name={'heart-outline'} size={24} color="#0A4174"/>
          <Text>Add To Wishlist</Text>
        </View>
        <View className="flex flex-row">
          <Entypo name="cross" size={24} color="#0A4174" />
          <Text>Remove Product</Text>
        </View>
          </View>
    </View>
  );
};

export default Cart;
