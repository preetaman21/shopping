import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Products from 'components/Product'
import Categories from 'components/Categories'

const Home = ({navigation} : any) => {
  return (
    <ScrollView>
         <View>
           <Categories/>
           <View className="flex-row justify-center items-center bg-yellow-50 rounded-2xl m-4">
           <Pressable onPress={() => (navigation.navigate('ProductDynamic'))} >
             <Text className="text-[#7394bc] font-bold p-2"> Go to Dynamic Products</Text>
           </Pressable>
           </View>
         </View>
         
        <Products/>
    </ScrollView>
  )
}

export default Home