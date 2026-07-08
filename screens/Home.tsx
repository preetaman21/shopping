import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Products from 'components/Product'
import Categories from 'components/Categories'

const Home = ({navigation} : any) => {
  const Header = (
         <View>
           <Categories/>
           <View className="flex-row justify-center items-center bg-[#425f83] rounded-2xl m-4">
           <Pressable onPress={() => (navigation.navigate('ProductDynamic'))} >
             <Text className="text-yellow-50 font-bold p-2"> Go to Dynamic Products</Text>
           </Pressable>
           </View>
         </View>
  );

  return (
    <Products ListHeaderComponent={Header} />
  )
}

export default Home