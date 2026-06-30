import { View, Text, FlatList, Pressable, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

interface ProductDynamic{
    id: number;
    name: string;
    price: number;
    description: string;
    rating:{rate:number; count:number};
    image: string;
}
const ProductDynamic = ({navigation} : any) => {
    const [products, setProducts] =useState<ProductDynamic[]>([]);
    useEffect( ()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
    }, [])

  return (
      <FlatList
        data={products}
        keyExtractor={(item)=>item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({item})=>(
            <Pressable className="flex-1 m-2" onPress={()=> navigation.navigate ('ProductDetail',{product:item})}>
                <View className=" bg-gray-200 p-2 rounded-2xl">
                    <Text className="text-lg font-bold">{item.name}</Text>
                
                <View className="justify-center flex-row bg-white rounded-2xl mt-2">
                    <Image
                        source={{ uri: item.image }}
                        className="w-full h-40 my-2"
                        resizeMode="contain"
                    />
                </View>
                    <Text className="text-md text-gray-500 font-semibold mt-3">
                        {item.description}
                    </Text>
                
                <View className="flex-row justify-between mt-1">
                    <Text className="text-lg font-extrabold">
                        Rs. {item.price}
                    </Text>
                    <Text className="text-sm font-bold bg-green-600 px-2 rounded-xl text-white">
                        {item.rating.rate}</Text>
                </View>
                </View>
            </Pressable> 
        )}
      />
  )
}

export default ProductDynamic