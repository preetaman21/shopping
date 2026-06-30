import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Products from 'components/Product'
import Categories from 'components/Categories'

const Home = ({navigation} : any) => {
  return (
    <View className="flex-1">
     <Products 
       ListHeaderComponent={
         <View>
           <Categories/>
           <Pressable onPress={() => (navigation.navigate('ProductDynamic'))} className="bg-pink-900 rounded-2xl m-4">
             <Text className="text-pink-200 font-bold p-2"> Go to Dynamic Products</Text>
           </Pressable>
         </View>
       }
     />
    </View>
  )
}

export default Home