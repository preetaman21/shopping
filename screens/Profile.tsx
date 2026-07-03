import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Profile = () => {
  return (
    <ScrollView>
        <View className="flex-row items-center gap-4 ml-6 mt-2">
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXEMrD9KdzhkaUL0abV5nr2qm_W4FvbZ5NqGXFNdJrw&s=10' }} 
            className='w-10 h-10 rounded-full ml-3' alt='' />
        <Text className=' font-bold text-[#001D39] text-xl'>Amanpreet Kaur</Text>
        </View>
        <View className='flex  flex-row justify-evenly mt-4'>
          <View className="border border-yellow-300 p-4 rounded-xl items-center">
            <Feather name="phone-call" size={24} color="#0A4174" />
            <Text className=" font-bold mt-2 px-4">Help Center</Text>
          </View>
          <View className="border border-gray-300 p-4 rounded-xl items-center">
            <Feather name="gift" size={24} color="#0A4174" />
            <Text className=" font-bold mt-2 px-4">Refer & Earn</Text>
          </View>
        </View>
        <View>
          <Text className=" font-bold mt-4 text-lg px-4">My Payments</Text>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <Entypo name="mobile" size={24} color={'#0A4174'} />
            <Text className="text-[#526e8f]">Bank and UPI Details </Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <Entypo name="credit-card" size={24} color={'#0A4174'} />
            <Text className="text-[#526e8f]">Payment & Refund</Text>
          </View>
        </View>
        <View className="mt-4">
          <Text className=" font-bold text-lg px-4 ">My Activity</Text>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <Ionicons name={"language"} size={24} color={"#526e8f"}/>
            <Text>Language</Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <Ionicons name={"heart"} size={24} color={"#E281B1"}/>  
            <Text>Wishlist</Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <FontAwesome name="share-alt" size={24} color={'#0A4174'} />
            <Text>Shared Products</Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <FontAwesome6 name="shop" size={24} color={'#8C6E63'} />
            <Text>Followed Shops </Text>
          </View>
        </View>
        <View>
          <Text className=" font-bold mt-4 text-lg px-4 ">Others</Text>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <Ionicons name={"wallet"} size={24} color={"#AEC3B0"}/>
            <Text>Balance</Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <FontAwesome6 name="bag-shopping" size={24} color={'#90a7ba'} />
            <Text>Become a Supplier</Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <Ionicons name={"settings"} size={24} color={"#696968"}/>
            <Text>Settings</Text>
          </View>
          <View className="flex-row items-center gap-4 mt-4 px-4">
            <FontAwesome name="legal" size={24} color={'#d3a376'} />
            <Text>Legal & Policies</Text>
          </View>
          <View className="flex flex-row items-center gap-4 mt-4 px-4 ">
            <MaterialIcons name="logout" size={24} color={'#0A4174'} />
            <Text>Log Out</Text>
          </View>
        </View>
        
      </ScrollView>
  )
}

export default Profile