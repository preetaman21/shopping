import { View, Text, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <View className="flex-row items-center gap-4 justify-between"> 
        <View className="flex-row items-center gap-4 ml-6">
        <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1718370392212-cc9815e7e2c2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
        className='w-10 h-10 rounded-full ml-3' alt='' />
        <Text className=' font-bold text-[#001D39] text-xl'>Shopping</Text>
       </View>
       <View className="flex-row items-center gap-4 mr-6">
        <Pressable onPress={()=> (navigation.navigate('Cart'))}>
       <Ionicons name="cart-outline" size={32} color={'#0A4174'}  />
       </Pressable>
       <Pressable onPress={()=> (navigation.navigate('Wishlist'))}>
       <Ionicons name="heart-outline" size={32} color={'#0A4174'} />
       </Pressable>
      </View>
      </View>
      <View className="flex-row border border-gray-700 rounded-md mx-6 mb-2 mt-3 pl-3 pt-1">
      <Ionicons name="search" size={28} color='#374151' />
      <TextInput placeholder=" Search for products..."  />
      </View>
    </SafeAreaView>
  )
}

export default Header