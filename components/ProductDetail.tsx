import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

const ProductDetail = ({ route }: any) => {
  const { product } = route.params;
  return (
    <ScrollView>
    <View>
        <View className="mt-2 flex flex-row justify-center rounded-2xl bg-white">
          <Image source={{ uri: product.image }} className="my-5 h-96 w-64" />
        </View>
        <View className="flex flex-row justify-between p-2">
          <Text className=" text-lg font-semibold">{product.description}</Text>
          <Ionicons name="heart-outline" size={24} color='black'/>
          <Ionicons name="share" size={24} color='black'/>
        </View>
        <Text className="ml-4 text-2xl font-extrabold">Rs. {product.price}</Text>
        {/* <Text className="text-sm font-bold bg-green-600 px-2 mt-2 rounded-xl text-white w-12 ml-4 p-1">{product.rating}</Text> */}
        <View className="bg-white mt-4">
          <Text className="text-xl font-bold mt-2 ml-4">Select Size</Text>
          <Text className="bg-pink-200 border border-pink-700 rounded-full w-24 m-4 p-2">Free Size</Text>
        </View>
        <View className="bg-white mt-4">
          <Text className="text-xl font-bold mt-2 ml-4">Customer Ratings and Reviews</Text>
          <View>
          <Text className="text-xl mb-4 font-bold bg-green-600 px-4 mt-2 rounded-xl text-white w-20 ml-4 p-4">{product.rating}</Text> 
          </View>
        </View>
        <View className="bg-white mt-4 flex flex-row justify-evenly p-4 ">
          <View className='flex-1 items-center'>
            <Ionicons name="pricetag" size={24} color="#70184A" /> 
            <Text>Lowest Prices</Text>
          </View>
          <View className='flex-1 items-center'>
            <Ionicons name="cash" size={24} color="#70184A"/>
            <Text>Cash On Delivery</Text>
          </View>
          <View className='flex-1 items-center'>
            <FontAwesome6 name="box-open" size={24} color="#70184A" />
            {/* <Ionicons name="" size={24} color="#70184A"/> */}
            <Text>Easy Return</Text>
          </View>
        </View>
        <View className="bg-white mt-4 flex flex-row justify-evenly p-4">
             <Pressable className="border border-pink-800 rounded-lg py-3 px-4">
          <View className="flex flex-row"> 
            <Ionicons name="cart" size={24} color="#70184A"/>
          <Text className="text-xl text-pink-800 ml-2">Add to Cart</Text>
          </View>
        </Pressable>
        <Pressable className="border border-pink-800 bg-pink-800 py-3 px-4 rounded-lg">
          <View className="flex flex-row">
          <Entypo name="controller-fast-forward" size={24} color="white" />
            <Text className="text-xl text-white ml-2">Buy Now</Text>
            </View>
        </Pressable>
        </View>
    </View>
    </ScrollView>
  );
};


export default ProductDetail;
